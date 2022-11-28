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
    
    req := operations.BooksBookshelvesGetRequest{
        Security: operations.BooksBookshelvesGetSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            }
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.BooksBookshelvesGetPathParams{
            Shelf: "distinctio",
            UserID: "numquam",
        },
        QueryParams: operations.BooksBookshelvesGetQueryParams{
            DollarXgafv: "1",
            AccessToken: "dolor",
            Alt: "json",
            Callback: "sint",
            Fields: "eum",
            Key: "est",
            OauthToken: "unde",
            PrettyPrint: true,
            QuotaUser: "minima",
            Source: "et",
            UploadType: "est",
            UploadProtocol: "illum",
        },
    }
    
    res, err := s.Bookshelves.BooksBookshelvesGet(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Bookshelf != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### bookshelves

* `BooksBookshelvesGet` - Retrieves metadata for a specific bookshelf for the specified user.
* `BooksBookshelvesList` - Retrieves a list of public bookshelves for the specified user.
* `BooksBookshelvesVolumesList` - Retrieves volumes in a specific bookshelf for the specified user.

### cloudloading

* `BooksCloudloadingAddBook` - Add a user-upload volume and triggers processing.
* `BooksCloudloadingDeleteBook` - Remove the book and its contents
* `BooksCloudloadingUpdateBook` - Updates a user-upload volume.

### dictionary

* `BooksDictionaryListOfflineMetadata` - Returns a list of offline dictionary metadata available

### familysharing

* `BooksFamilysharingGetFamilyInfo` - Gets information regarding the family that the user is part of.
* `BooksFamilysharingShare` - Initiates sharing of the content with the user's family. Empty response indicates success.
* `BooksFamilysharingUnshare` - Initiates revoking content that has already been shared with the user's family. Empty response indicates success.

### layers

* `BooksLayersAnnotationDataGet` - Gets the annotation data.
* `BooksLayersAnnotationDataList` - Gets the annotation data for a volume and layer.
* `BooksLayersGet` - Gets the layer summary for a volume.
* `BooksLayersList` - List the layer summaries for a volume.
* `BooksLayersVolumeAnnotationsGet` - Gets the volume annotation.
* `BooksLayersVolumeAnnotationsList` - Gets the volume annotations for a volume and layer.

### myconfig

* `BooksMyconfigGetUserSettings` - Gets the current settings for the user.
* `BooksMyconfigReleaseDownloadAccess` - Release downloaded content access restriction.
* `BooksMyconfigRequestAccess` - Request concurrent and download access restrictions.
* `BooksMyconfigSyncVolumeLicenses` - Request downloaded content access for specified volumes on the My eBooks shelf.
* `BooksMyconfigUpdateUserSettings` - Sets the settings for the user. If a sub-object is specified, it will overwrite the existing sub-object stored in the server. Unspecified sub-objects will retain the existing value.

### mylibrary

* `BooksMylibraryAnnotationsDelete` - Deletes an annotation.
* `BooksMylibraryAnnotationsInsert` - Inserts a new annotation.
* `BooksMylibraryAnnotationsList` - Retrieves a list of annotations, possibly filtered.
* `BooksMylibraryAnnotationsSummary` - Gets the summary of specified layers.
* `BooksMylibraryAnnotationsUpdate` - Updates an existing annotation.
* `BooksMylibraryBookshelvesAddVolume` - Adds a volume to a bookshelf.
* `BooksMylibraryBookshelvesClearVolumes` - Clears all volumes from a bookshelf.
* `BooksMylibraryBookshelvesGet` - Retrieves metadata for a specific bookshelf belonging to the authenticated user.
* `BooksMylibraryBookshelvesList` - Retrieves a list of bookshelves belonging to the authenticated user.
* `BooksMylibraryBookshelvesMoveVolume` - Moves a volume within a bookshelf.
* `BooksMylibraryBookshelvesRemoveVolume` - Removes a volume from a bookshelf.
* `BooksMylibraryBookshelvesVolumesList` - Gets volume information for volumes on a bookshelf.
* `BooksMylibraryReadingpositionsGet` - Retrieves my reading position information for a volume.
* `BooksMylibraryReadingpositionsSetPosition` - Sets my reading position information for a volume.

### notification

* `BooksNotificationGet` - Returns notification details for a given notification id.

### onboarding

* `BooksOnboardingListCategories` - List categories for onboarding experience.
* `BooksOnboardingListCategoryVolumes` - List available volumes under categories for onboarding experience.

### personalizedstream

* `BooksPersonalizedstreamGet` - Returns a stream of personalized book clusters

### promooffer

* `BooksPromoofferAccept` - Accepts the promo offer.
* `BooksPromoofferDismiss` - Marks the promo offer as dismissed.
* `BooksPromoofferGet` - Returns a list of promo offers available to the user

### series

* `BooksSeriesGet` - Returns Series metadata for the given series ids.
* `BooksSeriesMembershipGet` - Returns Series membership data given the series id.

### volumes

* `BooksVolumesAssociatedList` - Return a list of associated books.
* `BooksVolumesGet` - Gets volume information for a single volume.
* `BooksVolumesList` - Performs a book search.
* `BooksVolumesMybooksList` - Return a list of books in My Library.
* `BooksVolumesRecommendedList` - Return a list of recommended books for the current user.
* `BooksVolumesRecommendedRate` - Rate a recommended book for the current user.
* `BooksVolumesUseruploadedList` - Return a list of books uploaded by the current user.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
