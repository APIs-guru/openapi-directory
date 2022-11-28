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
    
req = operations.ActivateRequest(
    security=operations.ActivateSecurity(
        custom_authentication=shared.SchemeCustomAuthentication(
            api_key="YOUR_API_KEY_HERE",
        ),
    ),
)
    
res = s.sdk.activate(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `activate` - Temporarily activates quick connect for five minutes.
* `add_listing_provider` - Adds a listings provider.
* `add_media_path` - Add a media path to a library.
* `add_to_collection` - Adds items to a collection.
* `add_to_playlist` - Adds items to a playlist.
* `add_tuner_host` - Adds a tuner host.
* `add_user_to_session` - Adds an additional user to a session.
* `add_virtual_folder` - Adds a virtual folder.
* `apply_search_criteria` - Applies search criteria to an item and refreshes metadata.
* `authenticate_user` - Authenticates a user.
* `authenticate_user_by_name` - Authenticates a user by name.
* `authenticate_with_quick_connect` - Authenticates a user with quick connect.
* `authorize` - Authorizes a pending quick connect request.
* `available` - Enables or disables quick connect.
* `cancel_package_installation` - Cancels a package installation.
* `cancel_series_timer` - Cancels a live tv series timer.
* `cancel_timer` - Cancels a live tv timer.
* `close_live_stream` - Closes a media source.
* `complete_wizard` - Completes the startup wizard.
* `connect` - Attempts to retrieve authentication information.
* `create_admin_notification` - Sends a notification to all admins.
* `create_collection` - Creates a new collection.
* `create_key` - Create a new api key.
* `create_playlist` - Creates a new playlist.
* `create_profile` - Creates a profile.
* `create_series_timer` - Creates a live tv series timer.
* `create_timer` - Creates a live tv timer.
* `create_user_by_name` - Creates a user.
* `deauthorize` - Deauthorize all quick connect devices for the current user.
* `delete_alternate_sources` - Removes alternate video sources.
* `delete_device` - Deletes a device.
* `delete_item` - Deletes an item from the library and filesystem.
* `delete_item_image` - Delete an item's image.
* `delete_item_image_by_index` - Delete an item's image.
* `delete_items` - Deletes items from the library and filesystem.
* `delete_listing_provider` - Delete listing provider.
* `delete_profile` - Deletes a profile.
* `delete_recording` - Deletes a live tv recording.
* `delete_subtitle` - Deletes an external subtitle file.
* `delete_tuner_host` - Deletes a tuner host.
* `delete_user` - Deletes a user.
* `delete_user_image` - Delete the user's image.
* `delete_user_image_by_index` - Delete the user's image.
* `delete_user_item_rating` - Deletes a user's saved personal rating for an item.
* `disable_plugin` - Disable a plugin.
* `discover_tuners` - Discover tuners.
* `discvover_tuners` - Discover tuners.
* `display_content` - Instructs a session to browse to an item or view.
* `download_remote_image` - Downloads a remote image for an item.
* `download_remote_subtitles` - Downloads a remote subtitle.
* `enable_plugin` - Enables a disabled plugin.
* `forgot_password` - Initiates the forgot password process for a local user.
* `forgot_password_pin` - Redeems a forgot password pin.
* `get` - Gets the search hint result.
* `get_additional_part` - Gets additional parts for a video.
* `get_album_artists` - Gets all album artists from a given item, folder, or the entire library.
* `get_all_channel_features` - Get all channel features.
* `get_ancestors` - Gets all parents of an item.
* `get_artist_by_name` - Gets an artist by name.
* `get_artist_image` - Get artist image by name.
* `get_artists` - Gets all artists from a given item, folder, or the entire library.
* `get_attachment` - Get video attachment.
* `get_audio_stream` - Gets an audio stream.
* `get_audio_stream_by_container` - Gets an audio stream.
* `get_auth_providers` - Get all auth providers.
* `get_bitrate_test_bytes` - Tests the network with a request with the size of the bitrate.
* `get_book_remote_search_results` - Get book remote search.
* `get_box_set_remote_search_results` - Get box set remote search.
* `get_branding_css` - Gets branding css.
* `get_branding_css_2` - Gets branding css.
* `get_branding_options` - Gets branding configuration.
* `get_channel` - Gets a live tv channel.
* `get_channel_features` - Get channel features.
* `get_channel_items` - Get channel items.
* `get_channel_mapping_options` - Get channel mapping options.
* `get_channels` - Gets available channels.
* `get_configuration` - Gets application configuration.
* `get_configuration_pages` - Gets the configuration pages.
* `get_connection_manager` - Gets Dlna media receiver registrar xml.
* `get_connection_manager_2` - Gets Dlna media receiver registrar xml.
* `get_connection_manager_3` - Gets Dlna media receiver registrar xml.
* `get_content_directory` - Gets Dlna content directory xml.
* `get_content_directory_2` - Gets Dlna content directory xml.
* `get_content_directory_3` - Gets Dlna content directory xml.
* `get_countries` - Gets known countries.
* `get_critic_reviews` - Gets critic review for an item.
* `get_cultures` - Gets known cultures.
* `get_current_user` - Gets the user based on auth token.
* `get_dashboard_configuration_page` - Gets a dashboard configuration page.
* `get_default_directory_browser` - Get Default directory browser.
* `get_default_listing_provider` - Gets default listings provider info.
* `get_default_metadata_options` - Gets a default MetadataOptions object.
* `get_default_profile` - Gets the default profile.
* `get_default_timer` - Gets the default values for a new timer.
* `get_description_xml` - Get Description Xml.
* `get_description_xml_2` - Get Description Xml.
* `get_device_info` - Get info for a device.
* `get_device_options` - Get options for a device.
* `get_devices` - Get Devices.
* `get_directory_contents` - Gets the contents of a given directory in the file system.
* `get_display_preferences` - Get Display Preferences.
* `get_download` - Downloads item media.
* `get_drives` - Gets available drives from the server's file system.
* `get_endpoint_info` - Gets information about the request endpoint.
* `get_episodes` - Gets episodes for a tv season.
* `get_external_id_infos` - Get the item's external id info.
* `get_fallback_font` - Gets a fallback font file.
* `get_fallback_font_list` - Gets a list of available fallback font files.
* `get_file` - Get the original file of an item.
* `get_first_user` - Gets the first user.
* `get_first_user_2` - Gets the first user.
* `get_general_image` - Get General Image.
* `get_general_images` - Get all general images.
* `get_genre` - Gets a genre, by name.
* `get_genre_image` - Get genre image by name.
* `get_genre_image_by_index` - Get genre image by name.
* `get_genres` - Gets all genres from a given item, folder, or the entire library.
* `get_grouping_options` - Get user view grouping options.
* `get_guide_info` - Get guid info.
* `get_hls_audio_segment` - Gets a video stream using HTTP live streaming.
* `get_hls_audio_segment_legacy_aac` - Gets the specified audio segment for an audio item.
* `get_hls_audio_segment_legacy_mp3` - Gets the specified audio segment for an audio item.
* `get_hls_playlist_legacy` - Gets a hls video playlist.
* `get_hls_video_segment` - Gets a video stream using HTTP live streaming.
* `get_hls_video_segment_legacy` - Gets a hls video segment.
* `get_icon` - Gets a server icon.
* `get_icon_id` - Gets a server icon.
* `get_instant_mix_from_album` - Creates an instant playlist based on a given song.
* `get_instant_mix_from_artists` - Creates an instant playlist based on a given song.
* `get_instant_mix_from_item` - Creates an instant playlist based on a given song.
* `get_instant_mix_from_music_genre` - Creates an instant playlist based on a given song.
* `get_instant_mix_from_music_genres` - Creates an instant playlist based on a given song.
* `get_instant_mix_from_playlist` - Creates an instant playlist based on a given song.
* `get_instant_mix_from_song` - Creates an instant playlist based on a given song.
* `get_intros` - Gets intros to play before the main media item plays.
* `get_item` - Gets an item from a user's library.
* `get_item_counts` - Get item counts.
* `get_item_image` - Gets the item's image.
* `get_item_image2` - Gets the item's image.
* `get_item_image_by_index` - Gets the item's image.
* `get_item_image_infos` - Get item image infos.
* `get_items` - Gets items based on a query.
* `get_items_by_user_id` - Gets items based on a query.
* `get_keys` - Get all keys.
* `get_latest_channel_items` - Gets latest channel items.
* `get_latest_media` - Gets latest media.
* `get_library_options_info` - Gets the library options info.
* `get_lineups` - Gets available lineups.
* `get_live_hls_stream` - Gets a hls live stream.
* `get_live_recording_file` - Gets a live tv recording stream.
* `get_live_stream_file` - Gets a live tv channel stream.
* `get_live_tv_channels` - Gets available live tv channels.
* `get_live_tv_info` - Gets available live tv services.
* `get_live_tv_programs` - Gets available live tv epgs.
* `get_local_trailers` - Gets local trailers for an item.
* `get_localization_options` - Gets localization options.
* `get_log_entries` - Gets activity log entries.
* `get_log_file` - Gets a log file.
* `get_master_hls_audio_playlist` - Gets an audio hls playlist stream.
* `get_master_hls_video_playlist` - Gets a video hls playlist stream.
* `get_media_folders` - Gets all user media folders.
* `get_media_info_image` - Get media info image.
* `get_media_info_images` - Get all media info images.
* `get_media_receiver_registrar` - Gets Dlna media receiver registrar xml.
* `get_media_receiver_registrar_2` - Gets Dlna media receiver registrar xml.
* `get_media_receiver_registrar_3` - Gets Dlna media receiver registrar xml.
* `get_metadata_editor_info` - Gets metadata editor info for an item.
* `get_movie_recommendations` - Gets movie recommendations.
* `get_movie_remote_search_results` - Get movie remote search.
* `get_music_album_remote_search_results` - Get music album remote search.
* `get_music_artist_remote_search_results` - Get music artist remote search.
* `get_music_genre` - Gets a music genre, by name.
* `get_music_genre_image` - Get music genre image by name.
* `get_music_genre_image_by_index` - Get music genre image by name.
* `get_music_genres` - Gets all music genres from a given item, folder, or the entire library.
* `get_music_video_remote_search_results` - Get music video remote search.
* `get_named_configuration` - Gets a named configuration.
* `get_network_shares` - Gets network paths.
* `get_next_up` - Gets a list of next up episodes.
* `get_notification_services` - Gets notification services.
* `get_notification_types` - Gets notification types.
* `get_notifications` - Gets a user's notifications.
* `get_notifications_summary` - Gets a user's notification summary.
* `get_package_info` - Gets a package by name or assembly GUID.
* `get_packages` - Gets available packages.
* `get_parent_path` - Gets the parent path of a given path.
* `get_parental_ratings` - Gets known parental ratings.
* `get_password_reset_providers` - Get all password reset providers.
* `get_person` - Get person by name.
* `get_person_image` - Get person image by name.
* `get_person_image_by_index` - Get person image by name.
* `get_person_remote_search_results` - Get person remote search.
* `get_persons` - Gets all persons.
* `get_physical_paths` - Gets a list of physical paths from virtual folders.
* `get_ping_system` - Pings the system.
* `get_playback_info` - Gets live playback media info for an item.
* `get_playlist_items` - Gets the original items of a playlist.
* `get_plugin_configuration` - Gets plugin configuration.
* `get_plugin_image` - Gets a plugin's image.
* `get_plugin_manifest` - Gets a plugin's manifest.
* `get_plugins` - Gets a list of currently installed plugins.
* `get_posted_playback_info` - Gets live playback media info for an item.
* `get_profile` - Gets a single profile.
* `get_profile_infos` - Get profile infos.
* `get_program` - Gets a live tv program.
* `get_programs` - Gets available live tv epgs.
* `get_public_system_info` - Gets public information about the server.
* `get_public_users` - Gets a list of publicly visible users for display on a login screen.
* `get_query_filters` - Gets query filters.
* `get_query_filters_legacy` - Gets legacy query filters.
* `get_rating_image` - Get rating image.
* `get_rating_images` - Get all general images.
* `get_recommended_programs` - Gets recommended live tv epgs.
* `get_recording` - Gets a live tv recording.
* `get_recording_folders` - Gets recording folders.
* `get_recording_group` - Get recording group.
* `get_recording_groups` - Gets live tv recording groups.
* `get_recordings` - Gets live tv recordings.
* `get_recordings_series` - Gets live tv recording series.
* `get_remote_image` - Gets a remote image.
* `get_remote_image_providers` - Gets available remote image providers for an item.
* `get_remote_images` - Gets available remote images for an item.
* `get_remote_search_image` - Gets a remote image.
* `get_remote_subtitles` - Gets the remote subtitles.
* `get_repositories` - Gets all package repositories.
* `get_resume_items` - Gets items based on a query.
* `get_root_folder` - Gets the root folder from a user's library.
* `get_schedules_direct_countries` - Gets available countries.
* `get_seasons` - Gets seasons for a tv series.
* `get_series_remote_search_results` - Get series remote search.
* `get_series_timer` - Gets a live tv series timer.
* `get_series_timers` - Gets live tv series timers.
* `get_server_logs` - Gets a list of available server log files.
* `get_sessions` - Gets a list of sessions.
* `get_similar_albums` - Gets similar items.
* `get_similar_artists` - Gets similar items.
* `get_similar_items` - Gets similar items.
* `get_similar_movies` - Gets similar items.
* `get_similar_shows` - Gets similar items.
* `get_similar_trailers` - Gets similar items.
* `get_special_features` - Gets special features for an item.
* `get_startup_configuration` - Gets the initial startup wizard configuration.
* `get_status` - Gets the current quick connect state.
* `get_studio` - Gets a studio by name.
* `get_studio_image` - Get studio image by name.
* `get_studio_image_by_index` - Get studio image by name.
* `get_studios` - Gets all studios from a given item, folder, or the entire library.
* `get_subtitle` - Gets subtitles in a specified format.
* `get_subtitle_playlist` - Gets an HLS subtitle playlist.
* `get_subtitle_with_ticks` - Gets subtitles in a specified format.
* `get_suggestions` - Gets suggestions.
* `get_system_info` - Gets information about the server.
* `get_task` - Get task by id.
* `get_tasks` - Get tasks.
* `get_theme_media` - Get theme songs and videos for an item.
* `get_theme_songs` - Get theme songs for an item.
* `get_theme_videos` - Get theme videos for an item.
* `get_timer` - Gets a timer.
* `get_timers` - Gets the live tv timers.
* `get_trailer_remote_search_results` - Get trailer remote search.
* `get_trailers` - Finds movies and trailers similar to a given trailer.
* `get_tuner_host_types` - Get tuner host types.
* `get_universal_audio_stream` - Gets an audio stream.
* `get_upcoming_episodes` - Gets a list of upcoming episodes.
* `get_user_by_id` - Gets a user by Id.
* `get_user_image` - Get user profile image.
* `get_user_image_by_index` - Get user profile image.
* `get_user_views` - Get user views.
* `get_users` - Gets a list of users.
* `get_utc_time` - Gets the current UTC time.
* `get_variant_hls_audio_playlist` - Gets an audio stream using HTTP live streaming.
* `get_variant_hls_video_playlist` - Gets a video stream using HTTP live streaming.
* `get_video_stream` - Gets a video stream.
* `get_video_stream_by_container` - Gets a video stream.
* `get_virtual_folders` - Gets all virtual folders.
* `get_wake_on_lan_info` - Gets wake on lan information.
* `get_year` - Gets a year.
* `get_years` - Get years.
* `head_artist_image` - Get artist image by name.
* `head_audio_stream` - Gets an audio stream.
* `head_audio_stream_by_container` - Gets an audio stream.
* `head_genre_image` - Get genre image by name.
* `head_genre_image_by_index` - Get genre image by name.
* `head_item_image` - Gets the item's image.
* `head_item_image2` - Gets the item's image.
* `head_item_image_by_index` - Gets the item's image.
* `head_master_hls_audio_playlist` - Gets an audio hls playlist stream.
* `head_master_hls_video_playlist` - Gets a video hls playlist stream.
* `head_music_genre_image` - Get music genre image by name.
* `head_music_genre_image_by_index` - Get music genre image by name.
* `head_person_image` - Get person image by name.
* `head_person_image_by_index` - Get person image by name.
* `head_studio_image` - Get studio image by name.
* `head_studio_image_by_index` - Get studio image by name.
* `head_universal_audio_stream` - Gets an audio stream.
* `head_user_image` - Get user profile image.
* `head_user_image_by_index` - Get user profile image.
* `head_video_stream` - Gets a video stream.
* `head_video_stream_by_container` - Gets a video stream.
* `initiate` - Initiate a new quick connect request.
* `install_package` - Installs a package.
* `mark_favorite_item` - Marks an item as a favorite.
* `mark_played_item` - Marks an item as played for user.
* `mark_unplayed_item` - Marks an item as unplayed for user.
* `merge_versions` - Merges videos into a single record.
* `move_item` - Moves a playlist item.
* `on_playback_progress` - Reports a user's playback progress.
* `on_playback_start` - Reports that a user has begun playing an item.
* `on_playback_stopped` - Reports that a user has stopped playing an item.
* `open_live_stream` - Opens a media source.
* `ping_playback_session` - Pings a playback session.
* `play` - Instructs a session to play an item.
* `post` - Refreshes metadata for an item.
* `post_added_movies` - Reports that new movies have been added by an external source.
* `post_added_series` - Reports that new episodes of a series have been added by an external source.
* `post_capabilities` - Updates capabilities for a device.
* `post_full_capabilities` - Updates capabilities for a device.
* `post_ping_system` - Pings the system.
* `post_updated_media` - Reports that new movies have been added by an external source.
* `post_updated_movies` - Reports that new movies have been added by an external source.
* `post_updated_series` - Reports that new episodes of a series have been added by an external source.
* `post_user_image` - Sets the user image.
* `post_user_image_by_index` - Sets the user image.
* `process_connection_manager_control_request` - Process a connection manager control request.
* `process_content_directory_control_request` - Process a content directory control request.
* `process_media_receiver_registrar_control_request` - Process a media receiver registrar control request.
* `refresh_library` - Starts a library scan.
* `remove_from_collection` - Removes items from a collection.
* `remove_from_playlist` - Removes items from a playlist.
* `remove_media_path` - Remove a media path.
* `remove_user_from_session` - Removes an additional user from a session.
* `remove_virtual_folder` - Removes a virtual folder.
* `rename_virtual_folder` - Renames a virtual folder.
* `report_playback_progress` - Reports playback progress within a session.
* `report_playback_start` - Reports playback has started within a session.
* `report_playback_stopped` - Reports playback has stopped within a session.
* `report_session_ended` - Reports that a session has ended.
* `report_viewing` - Reports that a session is viewing an item.
* `reset_tuner` - Resets a tv tuner.
* `restart_application` - Restarts the application.
* `revoke_key` - Remove an api key.
* `search_remote_subtitles` - Search remote subtitles.
* `send_full_general_command` - Issues a full general command to a client.
* `send_general_command` - Issues a general command to a client.
* `send_message_command` - Issues a command to a client to display a message to the user.
* `send_playstate_command` - Issues a playstate command to a client.
* `send_system_command` - Issues a system command to a client.
* `set_channel_mapping` - Set channel mappings.
* `set_item_image` - Set item image.
* `set_item_image_by_index` - Set item image.
* `set_read` - Sets notifications as read.
* `set_remote_access` - Sets remote access and UPnP.
* `set_repositories` - Sets the enabled and existing package repositories.
* `set_unread` - Sets notifications as unread.
* `shutdown_application` - Shuts down the application.
* `start_task` - Start specified task.
* `stop_encoding_process` - Stops an active encoding.
* `stop_task` - Stop specified task.
* `sync_play_buffering` - Notify SyncPlay group that member is buffering.
* `sync_play_create_group` - Create a new SyncPlay group.
* `sync_play_get_groups` - Gets all SyncPlay groups.
* `sync_play_join_group` - Join an existing SyncPlay group.
* `sync_play_leave_group` - Leave the joined SyncPlay group.
* `sync_play_move_playlist_item` - Request to move an item in the playlist in SyncPlay group.
* `sync_play_next_item` - Request next item in SyncPlay group.
* `sync_play_pause` - Request pause in SyncPlay group.
* `sync_play_ping` - Update session ping.
* `sync_play_previous_item` - Request previous item in SyncPlay group.
* `sync_play_queue` - Request to queue items to the playlist of a SyncPlay group.
* `sync_play_ready` - Notify SyncPlay group that member is ready for playback.
* `sync_play_remove_from_playlist` - Request to remove items from the playlist in SyncPlay group.
* `sync_play_seek` - Request seek in SyncPlay group.
* `sync_play_set_ignore_wait` - Request SyncPlay group to ignore member during group-wait.
* `sync_play_set_new_queue` - Request to set new playlist in SyncPlay group.
* `sync_play_set_playlist_item` - Request to change playlist item in SyncPlay group.
* `sync_play_set_repeat_mode` - Request to set repeat mode in SyncPlay group.
* `sync_play_set_shuffle_mode` - Request to set shuffle mode in SyncPlay group.
* `sync_play_stop` - Request stop in SyncPlay group.
* `sync_play_unpause` - Request unpause in SyncPlay group.
* `uninstall_plugin` - Uninstalls a plugin.
* `uninstall_plugin_by_version` - Uninstalls a plugin by version.
* `unmark_favorite_item` - Unmarks item as a favorite.
* `update_configuration` - Updates application configuration.
* `update_device_options` - Update device options.
* `update_display_preferences` - Update Display Preferences.
* `update_initial_configuration` - Sets the initial startup wizard configuration.
* `update_item` - Updates an item.
* `update_item_content_type` - Updates an item's content type.
* `update_item_image_index` - Updates the index for an item image.
* `update_library_options` - Update library options.
* `update_media_encoder_path` - Updates the path to the media encoder.
* `update_media_path` - Updates a media path.
* `update_named_configuration` - Updates named configuration.
* `update_plugin_configuration` - Updates plugin configuration.
* `update_plugin_security_info` - Updates plugin security info.
* `update_profile` - Updates a profile.
* `update_series_timer` - Updates a live tv series timer.
* `update_startup_user` - Sets the user name and password.
* `update_task` - Update specified task triggers.
* `update_timer` - Updates a live tv timer.
* `update_user` - Updates a user.
* `update_user_configuration` - Updates a user configuration.
* `update_user_easy_password` - Updates a user's easy password.
* `update_user_item_rating` - Updates a user's rating for an item.
* `update_user_password` - Updates a user's password.
* `update_user_policy` - Updates a user policy.
* `upload_subtitle` - Upload an external subtitle file.
* `validate_path` - Validates path.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
