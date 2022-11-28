# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()
    
    req := operations.StreetviewpublishPhotoCreateRequest{
        Security: operations.StreetviewpublishPhotoCreateSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            }
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        QueryParams: operations.StreetviewpublishPhotoCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "dolores",
            Alt: "media",
            Callback: "vitae",
            Fields: "et",
            Key: "neque",
            OauthToken: "saepe",
            PrettyPrint: true,
            QuotaUser: "dignissimos",
            UploadType: "rerum",
            UploadProtocol: "non",
        },
        Request: &shared.PhotoInput{
            CaptureTime: "ut",
            Connections: []shared.Connection{
                shared.Connection{
                    Target: &shared.PhotoID{
                        ID: "rerum",
                    },
                },
                shared.Connection{
                    Target: &shared.PhotoID{
                        ID: "dolores",
                    },
                },
            },
            PhotoID: &shared.PhotoID{
                ID: "dolorum",
            },
            Places: []shared.PlaceInput{
                shared.PlaceInput{
                    PlaceID: "consequatur",
                },
                shared.PlaceInput{
                    PlaceID: "id",
                },
            },
            Pose: &shared.Pose{
                AccuracyMeters: 87.099998,
                Altitude: 90.099998,
                GpsRecordTimestampUnixEpoch: "mollitia",
                Heading: 6.100000,
                LatLngPair: &shared.LatLng{
                    Latitude: 95.199997,
                    Longitude: 52.099998,
                },
                Level: &shared.Level{
                    Name: "veritatis",
                    Number: 14.100000,
                },
                Pitch: 94.199997,
                Roll: 66.199997,
            },
            UploadReference: &shared.UploadRef{
                UploadURL: "consequatur",
            },
        },
    }
    
    res, err := s.Photo.StreetviewpublishPhotoCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Photo != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### photo

* `StreetviewpublishPhotoCreate` - After the client finishes uploading the photo with the returned UploadRef, CreatePhoto publishes the uploaded Photo to Street View on Google Maps. Currently, the only way to set heading, pitch, and roll in CreatePhoto is through the [Photo Sphere XMP metadata](https://developers.google.com/streetview/spherical-metadata) in the photo bytes. CreatePhoto ignores the `pose.heading`, `pose.pitch`, `pose.roll`, `pose.altitude`, and `pose.level` fields in Pose. This method returns the following error codes: * google.rpc.Code.INVALID_ARGUMENT if the request is malformed or if the uploaded photo is not a 360 photo. * google.rpc.Code.NOT_FOUND if the upload reference does not exist. * google.rpc.Code.RESOURCE_EXHAUSTED if the account has reached the storage limit.
* `StreetviewpublishPhotoDelete` - Deletes a Photo and its metadata. This method returns the following error codes: * google.rpc.Code.PERMISSION_DENIED if the requesting user did not create the requested photo. * google.rpc.Code.NOT_FOUND if the photo ID does not exist.
* `StreetviewpublishPhotoGet` - Gets the metadata of the specified Photo. This method returns the following error codes: * google.rpc.Code.PERMISSION_DENIED if the requesting user did not create the requested Photo. * google.rpc.Code.NOT_FOUND if the requested Photo does not exist. * google.rpc.Code.UNAVAILABLE if the requested Photo is still being indexed.
* `StreetviewpublishPhotoStartUpload` - Creates an upload session to start uploading photo bytes. The method uses the upload URL of the returned UploadRef to upload the bytes for the Photo. In addition to the photo requirements shown in https://support.google.com/maps/answer/7012050?ref_topic=6275604, the photo must meet the following requirements: * Photo Sphere XMP metadata must be included in the photo metadata. See https://developers.google.com/streetview/spherical-metadata for the required fields. * The pixel size of the photo must meet the size requirements listed in https://support.google.com/maps/answer/7012050?ref_topic=6275604, and the photo must be a full 360 horizontally. After the upload completes, the method uses UploadRef with CreatePhoto to create the Photo object entry.
* `StreetviewpublishPhotoUpdate` - Updates the metadata of a Photo, such as pose, place association, connections, etc. Changing the pixels of a photo is not supported. Only the fields specified in the updateMask field are used. If `updateMask` is not present, the update applies to all fields. This method returns the following error codes: * google.rpc.Code.PERMISSION_DENIED if the requesting user did not create the requested photo. * google.rpc.Code.INVALID_ARGUMENT if the request is malformed. * google.rpc.Code.NOT_FOUND if the requested photo does not exist. * google.rpc.Code.UNAVAILABLE if the requested Photo is still being indexed.

### photoSequence

* `StreetviewpublishPhotoSequenceCreate` - After the client finishes uploading the PhotoSequence with the returned UploadRef, CreatePhotoSequence extracts a sequence of 360 photos from a video or Extensible Device Metadata (XDM, http://www.xdm.org/) to be published to Street View on Google Maps. `CreatePhotoSequence` returns an Operation, with the PhotoSequence Id set in the `Operation.name` field. This method returns the following error codes: * google.rpc.Code.INVALID_ARGUMENT if the request is malformed. * google.rpc.Code.NOT_FOUND if the upload reference does not exist.
* `StreetviewpublishPhotoSequenceDelete` - Deletes a PhotoSequence and its metadata. This method returns the following error codes: * google.rpc.Code.PERMISSION_DENIED if the requesting user did not create the requested photo sequence. * google.rpc.Code.NOT_FOUND if the photo sequence ID does not exist. * google.rpc.Code.FAILED_PRECONDITION if the photo sequence ID is not yet finished processing.
* `StreetviewpublishPhotoSequenceGet` - Gets the metadata of the specified PhotoSequence via the Operation interface. This method returns the following three types of responses: * `Operation.done` = false, if the processing of PhotoSequence is not finished yet. * `Operation.done` = true and `Operation.error` is populated, if there was an error in processing. * `Operation.done` = true and `Operation.response` is poulated, which contains a PhotoSequence message. This method returns the following error codes: * google.rpc.Code.PERMISSION_DENIED if the requesting user did not create the requested PhotoSequence. * google.rpc.Code.NOT_FOUND if the requested PhotoSequence does not exist.
* `StreetviewpublishPhotoSequenceStartUpload` - Creates an upload session to start uploading photo sequence data. The upload URL of the returned UploadRef is used to upload the data for the `photoSequence`. After the upload is complete, the UploadRef is used with CreatePhotoSequence to create the PhotoSequence object entry.

### photoSequences

* `StreetviewpublishPhotoSequencesList` - Lists all the PhotoSequences that belong to the user, in descending CreatePhotoSequence timestamp order.

### photos

* `StreetviewpublishPhotosBatchDelete` - Deletes a list of Photos and their metadata. Note that if BatchDeletePhotos fails, either critical fields are missing or there is an authentication error. Even if BatchDeletePhotos succeeds, individual photos in the batch may have failures. These failures are specified in each PhotoResponse.status in BatchDeletePhotosResponse.results. See DeletePhoto for specific failures that can occur per photo.
* `StreetviewpublishPhotosBatchGet` - Gets the metadata of the specified Photo batch. Note that if BatchGetPhotos fails, either critical fields are missing or there is an authentication error. Even if BatchGetPhotos succeeds, individual photos in the batch may have failures. These failures are specified in each PhotoResponse.status in BatchGetPhotosResponse.results. See GetPhoto for specific failures that can occur per photo.
* `StreetviewpublishPhotosBatchUpdate` - Updates the metadata of Photos, such as pose, place association, connections, etc. Changing the pixels of photos is not supported. Note that if BatchUpdatePhotos fails, either critical fields are missing or there is an authentication error. Even if BatchUpdatePhotos succeeds, individual photos in the batch may have failures. These failures are specified in each PhotoResponse.status in BatchUpdatePhotosResponse.results. See UpdatePhoto for specific failures that can occur per photo. Only the fields specified in updateMask field are used. If `updateMask` is not present, the update applies to all fields. The number of UpdatePhotoRequest messages in a BatchUpdatePhotosRequest must not exceed 20. > Note: To update Pose.altitude, Pose.latLngPair has to be filled as well. Otherwise, the request will fail.
* `StreetviewpublishPhotosList` - Lists all the Photos that belong to the user. > Note: Recently created photos that are still being indexed are not returned in the response.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
