# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.StreetviewpublishPhotoCreateRequest(
    security=operations.StreetviewpublishPhotoCreateSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        )
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    query_params=operations.StreetviewpublishPhotoCreateQueryParams(
        dollar_xgafv="2",
        access_token="dolores",
        alt="media",
        callback="vitae",
        fields="et",
        key="neque",
        oauth_token="saepe",
        pretty_print=True,
        quota_user="dignissimos",
        upload_type="rerum",
        upload_protocol="non",
    ),
    request=shared.PhotoInput(
        capture_time="ut",
        connections=[
            shared.Connection(
                target=shared.PhotoID(
                    id="rerum",
                ),
            ),
            shared.Connection(
                target=shared.PhotoID(
                    id="dolores",
                ),
            ),
        ],
        photo_id=shared.PhotoID(
            id="dolorum",
        ),
        places=[
            shared.PlaceInput(
                place_id="consequatur",
            ),
            shared.PlaceInput(
                place_id="id",
            ),
        ],
        pose=shared.Pose(
            accuracy_meters=87.099998,
            altitude=90.099998,
            gps_record_timestamp_unix_epoch="mollitia",
            heading=6.100000,
            lat_lng_pair=shared.LatLng(
                latitude=95.199997,
                longitude=52.099998,
            ),
            level=shared.Level(
                name="veritatis",
                number=14.100000,
            ),
            pitch=94.199997,
            roll=66.199997,
        ),
        upload_reference=shared.UploadRef(
            upload_url="consequatur",
        ),
    ),
)
    
res = s.photo.streetviewpublish_photo_create(req)

if res.photo is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### photo

* `streetviewpublish_photo_create` - After the client finishes uploading the photo with the returned UploadRef, CreatePhoto publishes the uploaded Photo to Street View on Google Maps. Currently, the only way to set heading, pitch, and roll in CreatePhoto is through the [Photo Sphere XMP metadata](https://developers.google.com/streetview/spherical-metadata) in the photo bytes. CreatePhoto ignores the `pose.heading`, `pose.pitch`, `pose.roll`, `pose.altitude`, and `pose.level` fields in Pose. This method returns the following error codes: * google.rpc.Code.INVALID_ARGUMENT if the request is malformed or if the uploaded photo is not a 360 photo. * google.rpc.Code.NOT_FOUND if the upload reference does not exist. * google.rpc.Code.RESOURCE_EXHAUSTED if the account has reached the storage limit.
* `streetviewpublish_photo_delete` - Deletes a Photo and its metadata. This method returns the following error codes: * google.rpc.Code.PERMISSION_DENIED if the requesting user did not create the requested photo. * google.rpc.Code.NOT_FOUND if the photo ID does not exist.
* `streetviewpublish_photo_get` - Gets the metadata of the specified Photo. This method returns the following error codes: * google.rpc.Code.PERMISSION_DENIED if the requesting user did not create the requested Photo. * google.rpc.Code.NOT_FOUND if the requested Photo does not exist. * google.rpc.Code.UNAVAILABLE if the requested Photo is still being indexed.
* `streetviewpublish_photo_start_upload` - Creates an upload session to start uploading photo bytes. The method uses the upload URL of the returned UploadRef to upload the bytes for the Photo. In addition to the photo requirements shown in https://support.google.com/maps/answer/7012050?ref_topic=6275604, the photo must meet the following requirements: * Photo Sphere XMP metadata must be included in the photo metadata. See https://developers.google.com/streetview/spherical-metadata for the required fields. * The pixel size of the photo must meet the size requirements listed in https://support.google.com/maps/answer/7012050?ref_topic=6275604, and the photo must be a full 360 horizontally. After the upload completes, the method uses UploadRef with CreatePhoto to create the Photo object entry.
* `streetviewpublish_photo_update` - Updates the metadata of a Photo, such as pose, place association, connections, etc. Changing the pixels of a photo is not supported. Only the fields specified in the updateMask field are used. If `updateMask` is not present, the update applies to all fields. This method returns the following error codes: * google.rpc.Code.PERMISSION_DENIED if the requesting user did not create the requested photo. * google.rpc.Code.INVALID_ARGUMENT if the request is malformed. * google.rpc.Code.NOT_FOUND if the requested photo does not exist. * google.rpc.Code.UNAVAILABLE if the requested Photo is still being indexed.

### photoSequence

* `streetviewpublish_photo_sequence_create` - After the client finishes uploading the PhotoSequence with the returned UploadRef, CreatePhotoSequence extracts a sequence of 360 photos from a video or Extensible Device Metadata (XDM, http://www.xdm.org/) to be published to Street View on Google Maps. `CreatePhotoSequence` returns an Operation, with the PhotoSequence Id set in the `Operation.name` field. This method returns the following error codes: * google.rpc.Code.INVALID_ARGUMENT if the request is malformed. * google.rpc.Code.NOT_FOUND if the upload reference does not exist.
* `streetviewpublish_photo_sequence_delete` - Deletes a PhotoSequence and its metadata. This method returns the following error codes: * google.rpc.Code.PERMISSION_DENIED if the requesting user did not create the requested photo sequence. * google.rpc.Code.NOT_FOUND if the photo sequence ID does not exist. * google.rpc.Code.FAILED_PRECONDITION if the photo sequence ID is not yet finished processing.
* `streetviewpublish_photo_sequence_get` - Gets the metadata of the specified PhotoSequence via the Operation interface. This method returns the following three types of responses: * `Operation.done` = false, if the processing of PhotoSequence is not finished yet. * `Operation.done` = true and `Operation.error` is populated, if there was an error in processing. * `Operation.done` = true and `Operation.response` is poulated, which contains a PhotoSequence message. This method returns the following error codes: * google.rpc.Code.PERMISSION_DENIED if the requesting user did not create the requested PhotoSequence. * google.rpc.Code.NOT_FOUND if the requested PhotoSequence does not exist.
* `streetviewpublish_photo_sequence_start_upload` - Creates an upload session to start uploading photo sequence data. The upload URL of the returned UploadRef is used to upload the data for the `photoSequence`. After the upload is complete, the UploadRef is used with CreatePhotoSequence to create the PhotoSequence object entry.

### photoSequences

* `streetviewpublish_photo_sequences_list` - Lists all the PhotoSequences that belong to the user, in descending CreatePhotoSequence timestamp order.

### photos

* `streetviewpublish_photos_batch_delete` - Deletes a list of Photos and their metadata. Note that if BatchDeletePhotos fails, either critical fields are missing or there is an authentication error. Even if BatchDeletePhotos succeeds, individual photos in the batch may have failures. These failures are specified in each PhotoResponse.status in BatchDeletePhotosResponse.results. See DeletePhoto for specific failures that can occur per photo.
* `streetviewpublish_photos_batch_get` - Gets the metadata of the specified Photo batch. Note that if BatchGetPhotos fails, either critical fields are missing or there is an authentication error. Even if BatchGetPhotos succeeds, individual photos in the batch may have failures. These failures are specified in each PhotoResponse.status in BatchGetPhotosResponse.results. See GetPhoto for specific failures that can occur per photo.
* `streetviewpublish_photos_batch_update` - Updates the metadata of Photos, such as pose, place association, connections, etc. Changing the pixels of photos is not supported. Note that if BatchUpdatePhotos fails, either critical fields are missing or there is an authentication error. Even if BatchUpdatePhotos succeeds, individual photos in the batch may have failures. These failures are specified in each PhotoResponse.status in BatchUpdatePhotosResponse.results. See UpdatePhoto for specific failures that can occur per photo. Only the fields specified in updateMask field are used. If `updateMask` is not present, the update applies to all fields. The number of UpdatePhotoRequest messages in a BatchUpdatePhotosRequest must not exceed 20. > Note: To update Pose.altitude, Pose.latLngPair has to be filled as well. Otherwise, the request will fail.
* `streetviewpublish_photos_list` - Lists all the Photos that belong to the user. > Note: Recently created photos that are still being indexed are not returned in the response.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
