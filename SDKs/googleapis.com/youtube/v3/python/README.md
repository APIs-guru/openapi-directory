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
    
req = operations.YoutubeAbuseReportsInsertRequest(
    security=operations.YoutubeAbuseReportsInsertSecurity(
        option1=operations.YoutubeAbuseReportsInsertSecurityOption1(
            oauth2=shared.SchemeOauth2(
                authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
            )
            oauth2c=shared.SchemeOauth2c(
                authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
            )
        ),
    ),
    query_params=operations.YoutubeAbuseReportsInsertQueryParams(
        dollar_xgafv="1",
        access_token="qui",
        alt="media",
        callback="est",
        fields="eos",
        key="qui",
        oauth_token="animi",
        part=[
            "rem",
            "nobis",
        ],
        pretty_print=False,
        quota_user="quia",
        upload_type="ut",
        upload_protocol="ea",
    ),
    request=shared.AbuseReport(
        abuse_types=[
            shared.AbuseType(
                id="tenetur",
            ),
        ],
        description="atque",
        related_entities=[
            shared.RelatedEntity(
                entity=shared.Entity(
                    id="ut",
                    type_id="ea",
                    url="harum",
                ),
            ),
            shared.RelatedEntity(
                entity=shared.Entity(
                    id="quos",
                    type_id="delectus",
                    url="quisquam",
                ),
            ),
            shared.RelatedEntity(
                entity=shared.Entity(
                    id="sed",
                    type_id="id",
                    url="numquam",
                ),
            ),
        ],
        subject=shared.Entity(
            id="saepe",
            type_id="voluptatem",
            url="quaerat",
        ),
    ),
)
    
res = s.abuse_reports.youtube_abuse_reports_insert(req)

if res.abuse_report is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### abuseReports

* `youtube_abuse_reports_insert` - Inserts a new resource into this collection.

### activities

* `youtube_activities_list` - Retrieves a list of resources, possibly filtered.

### captions

* `youtube_captions_delete` - Deletes a resource.
* `youtube_captions_download` - Downloads a caption track.
* `youtube_captions_insert` - Inserts a new resource into this collection.
* `youtube_captions_list` - Retrieves a list of resources, possibly filtered.
* `youtube_captions_update` - Updates an existing resource.

### channelBanners

* `youtube_channel_banners_insert` - Inserts a new resource into this collection.

### channelSections

* `youtube_channel_sections_delete` - Deletes a resource.
* `youtube_channel_sections_insert` - Inserts a new resource into this collection.
* `youtube_channel_sections_list` - Retrieves a list of resources, possibly filtered.
* `youtube_channel_sections_update` - Updates an existing resource.

### channels

* `youtube_channels_list` - Retrieves a list of resources, possibly filtered.
* `youtube_channels_update` - Updates an existing resource.

### commentThreads

* `youtube_comment_threads_insert` - Inserts a new resource into this collection.
* `youtube_comment_threads_list` - Retrieves a list of resources, possibly filtered.

### comments

* `youtube_comments_delete` - Deletes a resource.
* `youtube_comments_insert` - Inserts a new resource into this collection.
* `youtube_comments_list` - Retrieves a list of resources, possibly filtered.
* `youtube_comments_mark_as_spam` - Expresses the caller's opinion that one or more comments should be flagged as spam.
* `youtube_comments_set_moderation_status` - Sets the moderation status of one or more comments.
* `youtube_comments_update` - Updates an existing resource.

### i18nLanguages

* `youtube_i18n_languages_list` - Retrieves a list of resources, possibly filtered.

### i18nRegions

* `youtube_i18n_regions_list` - Retrieves a list of resources, possibly filtered.

### liveBroadcasts

* `youtube_live_broadcasts_bind` - Bind a broadcast to a stream.
* `youtube_live_broadcasts_delete` - Delete a given broadcast.
* `youtube_live_broadcasts_insert` - Inserts a new stream for the authenticated user.
* `youtube_live_broadcasts_insert_cuepoint` - Insert cuepoints in a broadcast
* `youtube_live_broadcasts_list` - Retrieve the list of broadcasts associated with the given channel.
* `youtube_live_broadcasts_transition` - Transition a broadcast to a given status.
* `youtube_live_broadcasts_update` - Updates an existing broadcast for the authenticated user.

### liveChatBans

* `youtube_live_chat_bans_delete` - Deletes a chat ban.
* `youtube_live_chat_bans_insert` - Inserts a new resource into this collection.

### liveChatMessages

* `youtube_live_chat_messages_delete` - Deletes a chat message.
* `youtube_live_chat_messages_insert` - Inserts a new resource into this collection.
* `youtube_live_chat_messages_list` - Retrieves a list of resources, possibly filtered.

### liveChatModerators

* `youtube_live_chat_moderators_delete` - Deletes a chat moderator.
* `youtube_live_chat_moderators_insert` - Inserts a new resource into this collection.
* `youtube_live_chat_moderators_list` - Retrieves a list of resources, possibly filtered.

### liveStreams

* `youtube_live_streams_delete` - Deletes an existing stream for the authenticated user.
* `youtube_live_streams_insert` - Inserts a new stream for the authenticated user.
* `youtube_live_streams_list` - Retrieve the list of streams associated with the given channel. --
* `youtube_live_streams_update` - Updates an existing stream for the authenticated user.

### members

* `youtube_members_list` - Retrieves a list of members that match the request criteria for a channel.

### membershipsLevels

* `youtube_memberships_levels_list` - Retrieves a list of all pricing levels offered by a creator to the fans.

### playlistItems

* `youtube_playlist_items_delete` - Deletes a resource.
* `youtube_playlist_items_insert` - Inserts a new resource into this collection.
* `youtube_playlist_items_list` - Retrieves a list of resources, possibly filtered.
* `youtube_playlist_items_update` - Updates an existing resource.

### playlists

* `youtube_playlists_delete` - Deletes a resource.
* `youtube_playlists_insert` - Inserts a new resource into this collection.
* `youtube_playlists_list` - Retrieves a list of resources, possibly filtered.
* `youtube_playlists_update` - Updates an existing resource.

### search

* `youtube_search_list` - Retrieves a list of search resources

### subscriptions

* `youtube_subscriptions_delete` - Deletes a resource.
* `youtube_subscriptions_insert` - Inserts a new resource into this collection.
* `youtube_subscriptions_list` - Retrieves a list of resources, possibly filtered.

### superChatEvents

* `youtube_super_chat_events_list` - Retrieves a list of resources, possibly filtered.

### tests

* `youtube_tests_insert` - POST method.

### thirdPartyLinks

* `youtube_third_party_links_delete` - Deletes a resource.
* `youtube_third_party_links_insert` - Inserts a new resource into this collection.
* `youtube_third_party_links_list` - Retrieves a list of resources, possibly filtered.
* `youtube_third_party_links_update` - Updates an existing resource.

### thumbnails

* `youtube_thumbnails_set` - As this is not an insert in a strict sense (it supports uploading/setting of a thumbnail for multiple videos, which doesn't result in creation of a single resource), I use a custom verb here.

### videoAbuseReportReasons

* `youtube_video_abuse_report_reasons_list` - Retrieves a list of resources, possibly filtered.

### videoCategories

* `youtube_video_categories_list` - Retrieves a list of resources, possibly filtered.

### videos

* `youtube_videos_delete` - Deletes a resource.
* `youtube_videos_get_rating` - Retrieves the ratings that the authorized user gave to a list of specified videos.
* `youtube_videos_insert` - Inserts a new resource into this collection.
* `youtube_videos_list` - Retrieves a list of resources, possibly filtered.
* `youtube_videos_rate` - Adds a like or dislike rating to a video or removes a rating from a video.
* `youtube_videos_report_abuse` - Report abuse for a video.
* `youtube_videos_update` - Updates an existing resource.

### watermarks

* `youtube_watermarks_set` - Allows upload of watermark image and setting it for a channel.
* `youtube_watermarks_unset` - Allows removal of channel watermark.

### youtube

* `youtube_youtube_v3_update_comment_threads` - Updates an existing resource.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
