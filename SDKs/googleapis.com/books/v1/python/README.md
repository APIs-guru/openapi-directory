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
    
req = operations.BooksBookshelvesGetRequest(
    security=operations.BooksBookshelvesGetSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        )
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.BooksBookshelvesGetPathParams(
        shelf="distinctio",
        user_id="numquam",
    ),
    query_params=operations.BooksBookshelvesGetQueryParams(
        dollar_xgafv="1",
        access_token="dolor",
        alt="json",
        callback="sint",
        fields="eum",
        key="est",
        oauth_token="unde",
        pretty_print=True,
        quota_user="minima",
        source="et",
        upload_type="est",
        upload_protocol="illum",
    ),
)
    
res = s.bookshelves.books_bookshelves_get(req)

if res.bookshelf is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### bookshelves

* `books_bookshelves_get` - Retrieves metadata for a specific bookshelf for the specified user.
* `books_bookshelves_list` - Retrieves a list of public bookshelves for the specified user.
* `books_bookshelves_volumes_list` - Retrieves volumes in a specific bookshelf for the specified user.

### cloudloading

* `books_cloudloading_add_book` - Add a user-upload volume and triggers processing.
* `books_cloudloading_delete_book` - Remove the book and its contents
* `books_cloudloading_update_book` - Updates a user-upload volume.

### dictionary

* `books_dictionary_list_offline_metadata` - Returns a list of offline dictionary metadata available

### familysharing

* `books_familysharing_get_family_info` - Gets information regarding the family that the user is part of.
* `books_familysharing_share` - Initiates sharing of the content with the user's family. Empty response indicates success.
* `books_familysharing_unshare` - Initiates revoking content that has already been shared with the user's family. Empty response indicates success.

### layers

* `books_layers_annotation_data_get` - Gets the annotation data.
* `books_layers_annotation_data_list` - Gets the annotation data for a volume and layer.
* `books_layers_get` - Gets the layer summary for a volume.
* `books_layers_list` - List the layer summaries for a volume.
* `books_layers_volume_annotations_get` - Gets the volume annotation.
* `books_layers_volume_annotations_list` - Gets the volume annotations for a volume and layer.

### myconfig

* `books_myconfig_get_user_settings` - Gets the current settings for the user.
* `books_myconfig_release_download_access` - Release downloaded content access restriction.
* `books_myconfig_request_access` - Request concurrent and download access restrictions.
* `books_myconfig_sync_volume_licenses` - Request downloaded content access for specified volumes on the My eBooks shelf.
* `books_myconfig_update_user_settings` - Sets the settings for the user. If a sub-object is specified, it will overwrite the existing sub-object stored in the server. Unspecified sub-objects will retain the existing value.

### mylibrary

* `books_mylibrary_annotations_delete` - Deletes an annotation.
* `books_mylibrary_annotations_insert` - Inserts a new annotation.
* `books_mylibrary_annotations_list` - Retrieves a list of annotations, possibly filtered.
* `books_mylibrary_annotations_summary` - Gets the summary of specified layers.
* `books_mylibrary_annotations_update` - Updates an existing annotation.
* `books_mylibrary_bookshelves_add_volume` - Adds a volume to a bookshelf.
* `books_mylibrary_bookshelves_clear_volumes` - Clears all volumes from a bookshelf.
* `books_mylibrary_bookshelves_get` - Retrieves metadata for a specific bookshelf belonging to the authenticated user.
* `books_mylibrary_bookshelves_list` - Retrieves a list of bookshelves belonging to the authenticated user.
* `books_mylibrary_bookshelves_move_volume` - Moves a volume within a bookshelf.
* `books_mylibrary_bookshelves_remove_volume` - Removes a volume from a bookshelf.
* `books_mylibrary_bookshelves_volumes_list` - Gets volume information for volumes on a bookshelf.
* `books_mylibrary_readingpositions_get` - Retrieves my reading position information for a volume.
* `books_mylibrary_readingpositions_set_position` - Sets my reading position information for a volume.

### notification

* `books_notification_get` - Returns notification details for a given notification id.

### onboarding

* `books_onboarding_list_categories` - List categories for onboarding experience.
* `books_onboarding_list_category_volumes` - List available volumes under categories for onboarding experience.

### personalizedstream

* `books_personalizedstream_get` - Returns a stream of personalized book clusters

### promooffer

* `books_promooffer_accept` - Accepts the promo offer.
* `books_promooffer_dismiss` - Marks the promo offer as dismissed.
* `books_promooffer_get` - Returns a list of promo offers available to the user

### series

* `books_series_get` - Returns Series metadata for the given series ids.
* `books_series_membership_get` - Returns Series membership data given the series id.

### volumes

* `books_volumes_associated_list` - Return a list of associated books.
* `books_volumes_get` - Gets volume information for a single volume.
* `books_volumes_list` - Performs a book search.
* `books_volumes_mybooks_list` - Return a list of books in My Library.
* `books_volumes_recommended_list` - Return a list of recommended books for the current user.
* `books_volumes_recommended_rate` - Rate a recommended book for the current user.
* `books_volumes_useruploaded_list` - Return a list of books uploaded by the current user.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
