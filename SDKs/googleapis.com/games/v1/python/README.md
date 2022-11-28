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
    
req = operations.GamesAchievementDefinitionsListRequest(
    security=operations.GamesAchievementDefinitionsListSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        )
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    query_params=operations.GamesAchievementDefinitionsListQueryParams(
        dollar_xgafv="2",
        access_token="iusto",
        alt="proto",
        callback="accusantium",
        fields="eaque",
        key="eaque",
        language="dicta",
        max_results=1126920409312496146,
        oauth_token="ea",
        page_token="delectus",
        pretty_print=True,
        quota_user="hic",
        upload_type="quasi",
        upload_protocol="eum",
    ),
)
    
res = s.achievement_definitions.games_achievement_definitions_list(req)

if res.achievement_definitions_list_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### achievementDefinitions

* `games_achievement_definitions_list` - Lists all the achievement definitions for your application.

### achievements

* `games_achievements_increment` - Increments the steps of the achievement with the given ID for the currently authenticated player.
* `games_achievements_list` - Lists the progress for all your application's achievements for the currently authenticated player.
* `games_achievements_reveal` - Sets the state of the achievement with the given ID to `REVEALED` for the currently authenticated player.
* `games_achievements_set_steps_at_least` - Sets the steps for the currently authenticated player towards unlocking an achievement. If the steps parameter is less than the current number of steps that the player already gained for the achievement, the achievement is not modified.
* `games_achievements_unlock` - Unlocks this achievement for the currently authenticated player.
* `games_achievements_update_multiple` - Updates multiple achievements for the currently authenticated player.

### applications

* `games_applications_get` - Retrieves the metadata of the application with the given ID. If the requested application is not available for the specified `platformType`, the returned response will not include any instance data.
* `games_applications_get_end_point` - Returns a URL for the requested end point type.
* `games_applications_played` - Indicate that the currently authenticated user is playing your application.
* `games_applications_verify` - Verifies the auth token provided with this request is for the application with the specified ID, and returns the ID of the player it was granted for.

### events

* `games_events_list_by_player` - Returns a list showing the current progress on events in this application for the currently authenticated user.
* `games_events_list_definitions` - Returns a list of the event definitions in this application.
* `games_events_record` - Records a batch of changes to the number of times events have occurred for the currently authenticated user of this application.

### leaderboards

* `games_leaderboards_get` - Retrieves the metadata of the leaderboard with the given ID.
* `games_leaderboards_list` - Lists all the leaderboard metadata for your application.

### metagame

* `games_metagame_get_metagame_config` - Return the metagame configuration data for the calling application.
* `games_metagame_list_categories_by_player` - List play data aggregated per category for the player corresponding to `playerId`.

### players

* `games_players_get` - Retrieves the Player resource with the given ID. To retrieve the player for the currently authenticated user, set `playerId` to `me`.
* `games_players_get_scoped_player_ids` - Retrieves scoped player identifiers for currently authenticated user.
* `games_players_list` - Get the collection of players for the currently authenticated user.

### revisions

* `games_revisions_check` - Checks whether the games client is out of date.

### scores

* `games_scores_get` - Get high scores, and optionally ranks, in leaderboards for the currently authenticated player. For a specific time span, `leaderboardId` can be set to `ALL` to retrieve data for all leaderboards in a given time span. `NOTE: You cannot ask for 'ALL' leaderboards and 'ALL' timeSpans in the same request; only one parameter may be set to 'ALL'.
* `games_scores_list` - Lists the scores in a leaderboard, starting from the top.
* `games_scores_list_window` - Lists the scores in a leaderboard around (and including) a player's score.
* `games_scores_submit` - Submits a score to the specified leaderboard.
* `games_scores_submit_multiple` - Submits multiple scores to leaderboards.

### snapshots

* `games_snapshots_get` - Retrieves the metadata for a given snapshot ID.
* `games_snapshots_list` - Retrieves a list of snapshots created by your application for the player corresponding to the player ID.

### stats

* `games_stats_get` - Returns engagement and spend statistics in this application for the currently authenticated user.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
