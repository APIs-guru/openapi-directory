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
    
    req := operations.YoutubeAbuseReportsInsertRequest{
        Security: operations.YoutubeAbuseReportsInsertSecurity{
            Option1: &operations.YoutubeAbuseReportsInsertSecurityOption1{
                Oauth2: shared.SchemeOauth2{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                }
                Oauth2c: shared.SchemeOauth2c{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                }
            },
        },
        QueryParams: operations.YoutubeAbuseReportsInsertQueryParams{
            DollarXgafv: "1",
            AccessToken: "qui",
            Alt: "media",
            Callback: "est",
            Fields: "eos",
            Key: "qui",
            OauthToken: "animi",
            Part: []string{
                "rem",
                "nobis",
            },
            PrettyPrint: false,
            QuotaUser: "quia",
            UploadType: "ut",
            UploadProtocol: "ea",
        },
        Request: &shared.AbuseReport{
            AbuseTypes: []shared.AbuseType{
                shared.AbuseType{
                    ID: "tenetur",
                },
            },
            Description: "atque",
            RelatedEntities: []shared.RelatedEntity{
                shared.RelatedEntity{
                    Entity: &shared.Entity{
                        ID: "ut",
                        TypeID: "ea",
                        URL: "harum",
                    },
                },
                shared.RelatedEntity{
                    Entity: &shared.Entity{
                        ID: "quos",
                        TypeID: "delectus",
                        URL: "quisquam",
                    },
                },
                shared.RelatedEntity{
                    Entity: &shared.Entity{
                        ID: "sed",
                        TypeID: "id",
                        URL: "numquam",
                    },
                },
            },
            Subject: &shared.Entity{
                ID: "saepe",
                TypeID: "voluptatem",
                URL: "quaerat",
            },
        },
    }
    
    res, err := s.AbuseReports.YoutubeAbuseReportsInsert(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AbuseReport != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### abuseReports

* `YoutubeAbuseReportsInsert` - Inserts a new resource into this collection.

### activities

* `YoutubeActivitiesList` - Retrieves a list of resources, possibly filtered.

### captions

* `YoutubeCaptionsDelete` - Deletes a resource.
* `YoutubeCaptionsDownload` - Downloads a caption track.
* `YoutubeCaptionsInsert` - Inserts a new resource into this collection.
* `YoutubeCaptionsList` - Retrieves a list of resources, possibly filtered.
* `YoutubeCaptionsUpdate` - Updates an existing resource.

### channelBanners

* `YoutubeChannelBannersInsert` - Inserts a new resource into this collection.

### channelSections

* `YoutubeChannelSectionsDelete` - Deletes a resource.
* `YoutubeChannelSectionsInsert` - Inserts a new resource into this collection.
* `YoutubeChannelSectionsList` - Retrieves a list of resources, possibly filtered.
* `YoutubeChannelSectionsUpdate` - Updates an existing resource.

### channels

* `YoutubeChannelsList` - Retrieves a list of resources, possibly filtered.
* `YoutubeChannelsUpdate` - Updates an existing resource.

### commentThreads

* `YoutubeCommentThreadsInsert` - Inserts a new resource into this collection.
* `YoutubeCommentThreadsList` - Retrieves a list of resources, possibly filtered.

### comments

* `YoutubeCommentsDelete` - Deletes a resource.
* `YoutubeCommentsInsert` - Inserts a new resource into this collection.
* `YoutubeCommentsList` - Retrieves a list of resources, possibly filtered.
* `YoutubeCommentsMarkAsSpam` - Expresses the caller's opinion that one or more comments should be flagged as spam.
* `YoutubeCommentsSetModerationStatus` - Sets the moderation status of one or more comments.
* `YoutubeCommentsUpdate` - Updates an existing resource.

### i18nLanguages

* `YoutubeI18nLanguagesList` - Retrieves a list of resources, possibly filtered.

### i18nRegions

* `YoutubeI18nRegionsList` - Retrieves a list of resources, possibly filtered.

### liveBroadcasts

* `YoutubeLiveBroadcastsBind` - Bind a broadcast to a stream.
* `YoutubeLiveBroadcastsDelete` - Delete a given broadcast.
* `YoutubeLiveBroadcastsInsert` - Inserts a new stream for the authenticated user.
* `YoutubeLiveBroadcastsInsertCuepoint` - Insert cuepoints in a broadcast
* `YoutubeLiveBroadcastsList` - Retrieve the list of broadcasts associated with the given channel.
* `YoutubeLiveBroadcastsTransition` - Transition a broadcast to a given status.
* `YoutubeLiveBroadcastsUpdate` - Updates an existing broadcast for the authenticated user.

### liveChatBans

* `YoutubeLiveChatBansDelete` - Deletes a chat ban.
* `YoutubeLiveChatBansInsert` - Inserts a new resource into this collection.

### liveChatMessages

* `YoutubeLiveChatMessagesDelete` - Deletes a chat message.
* `YoutubeLiveChatMessagesInsert` - Inserts a new resource into this collection.
* `YoutubeLiveChatMessagesList` - Retrieves a list of resources, possibly filtered.

### liveChatModerators

* `YoutubeLiveChatModeratorsDelete` - Deletes a chat moderator.
* `YoutubeLiveChatModeratorsInsert` - Inserts a new resource into this collection.
* `YoutubeLiveChatModeratorsList` - Retrieves a list of resources, possibly filtered.

### liveStreams

* `YoutubeLiveStreamsDelete` - Deletes an existing stream for the authenticated user.
* `YoutubeLiveStreamsInsert` - Inserts a new stream for the authenticated user.
* `YoutubeLiveStreamsList` - Retrieve the list of streams associated with the given channel. --
* `YoutubeLiveStreamsUpdate` - Updates an existing stream for the authenticated user.

### members

* `YoutubeMembersList` - Retrieves a list of members that match the request criteria for a channel.

### membershipsLevels

* `YoutubeMembershipsLevelsList` - Retrieves a list of all pricing levels offered by a creator to the fans.

### playlistItems

* `YoutubePlaylistItemsDelete` - Deletes a resource.
* `YoutubePlaylistItemsInsert` - Inserts a new resource into this collection.
* `YoutubePlaylistItemsList` - Retrieves a list of resources, possibly filtered.
* `YoutubePlaylistItemsUpdate` - Updates an existing resource.

### playlists

* `YoutubePlaylistsDelete` - Deletes a resource.
* `YoutubePlaylistsInsert` - Inserts a new resource into this collection.
* `YoutubePlaylistsList` - Retrieves a list of resources, possibly filtered.
* `YoutubePlaylistsUpdate` - Updates an existing resource.

### search

* `YoutubeSearchList` - Retrieves a list of search resources

### subscriptions

* `YoutubeSubscriptionsDelete` - Deletes a resource.
* `YoutubeSubscriptionsInsert` - Inserts a new resource into this collection.
* `YoutubeSubscriptionsList` - Retrieves a list of resources, possibly filtered.

### superChatEvents

* `YoutubeSuperChatEventsList` - Retrieves a list of resources, possibly filtered.

### tests

* `YoutubeTestsInsert` - POST method.

### thirdPartyLinks

* `YoutubeThirdPartyLinksDelete` - Deletes a resource.
* `YoutubeThirdPartyLinksInsert` - Inserts a new resource into this collection.
* `YoutubeThirdPartyLinksList` - Retrieves a list of resources, possibly filtered.
* `YoutubeThirdPartyLinksUpdate` - Updates an existing resource.

### thumbnails

* `YoutubeThumbnailsSet` - As this is not an insert in a strict sense (it supports uploading/setting of a thumbnail for multiple videos, which doesn't result in creation of a single resource), I use a custom verb here.

### videoAbuseReportReasons

* `YoutubeVideoAbuseReportReasonsList` - Retrieves a list of resources, possibly filtered.

### videoCategories

* `YoutubeVideoCategoriesList` - Retrieves a list of resources, possibly filtered.

### videos

* `YoutubeVideosDelete` - Deletes a resource.
* `YoutubeVideosGetRating` - Retrieves the ratings that the authorized user gave to a list of specified videos.
* `YoutubeVideosInsert` - Inserts a new resource into this collection.
* `YoutubeVideosList` - Retrieves a list of resources, possibly filtered.
* `YoutubeVideosRate` - Adds a like or dislike rating to a video or removes a rating from a video.
* `YoutubeVideosReportAbuse` - Report abuse for a video.
* `YoutubeVideosUpdate` - Updates an existing resource.

### watermarks

* `YoutubeWatermarksSet` - Allows upload of watermark image and setting it for a channel.
* `YoutubeWatermarksUnset` - Allows removal of channel watermark.

### youtube

* `YoutubeYoutubeV3UpdateCommentThreads` - Updates an existing resource.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
