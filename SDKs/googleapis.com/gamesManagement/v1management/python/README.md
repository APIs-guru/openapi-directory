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
    
req = operations.GamesManagementAchievementsResetRequest(
    security=operations.GamesManagementAchievementsResetSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        )
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.GamesManagementAchievementsResetPathParams(
        achievement_id="harum",
    ),
    query_params=operations.GamesManagementAchievementsResetQueryParams(
        dollar_xgafv="1",
        access_token="harum",
        alt="media",
        callback="reprehenderit",
        fields="cupiditate",
        key="sint",
        oauth_token="quibusdam",
        pretty_print=True,
        quota_user="illum",
        upload_type="nihil",
        upload_protocol="magni",
    ),
)
    
res = s.achievements.games_management_achievements_reset(req)

if res.achievement_reset_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### achievements

* `games_management_achievements_reset` - Resets the achievement with the given ID for the currently authenticated player. This method is only accessible to whitelisted tester accounts for your application.
* `games_management_achievements_reset_all` - Resets all achievements for the currently authenticated player for your application. This method is only accessible to whitelisted tester accounts for your application.
* `games_management_achievements_reset_all_for_all_players` - Resets all draft achievements for all players. This method is only available to user accounts for your developer console.
* `games_management_achievements_reset_for_all_players` - Resets the achievement with the given ID for all players. This method is only available to user accounts for your developer console. Only draft achievements can be reset.
* `games_management_achievements_reset_multiple_for_all_players` - Resets achievements with the given IDs for all players. This method is only available to user accounts for your developer console. Only draft achievements may be reset.

### applications

* `games_management_applications_list_hidden` - Get the list of players hidden from the given application. This method is only available to user accounts for your developer console.

### events

* `games_management_events_reset` - Resets all player progress on the event with the given ID for the currently authenticated player. This method is only accessible to whitelisted tester accounts for your application.
* `games_management_events_reset_all` - Resets all player progress on all events for the currently authenticated player. This method is only accessible to whitelisted tester accounts for your application.
* `games_management_events_reset_all_for_all_players` - Resets all draft events for all players. This method is only available to user accounts for your developer console.
* `games_management_events_reset_for_all_players` - Resets the event with the given ID for all players. This method is only available to user accounts for your developer console. Only draft events can be reset.
* `games_management_events_reset_multiple_for_all_players` - Resets events with the given IDs for all players. This method is only available to user accounts for your developer console. Only draft events may be reset.

### players

* `games_management_players_hide` - Hide the given player's leaderboard scores from the given application. This method is only available to user accounts for your developer console.
* `games_management_players_unhide` - Unhide the given player's leaderboard scores from the given application. This method is only available to user accounts for your developer console.

### scores

* `games_management_scores_reset` - Resets scores for the leaderboard with the given ID for the currently authenticated player. This method is only accessible to whitelisted tester accounts for your application.
* `games_management_scores_reset_all` - Resets all scores for all leaderboards for the currently authenticated players. This method is only accessible to whitelisted tester accounts for your application.
* `games_management_scores_reset_all_for_all_players` - Resets scores for all draft leaderboards for all players. This method is only available to user accounts for your developer console.
* `games_management_scores_reset_for_all_players` - Resets scores for the leaderboard with the given ID for all players. This method is only available to user accounts for your developer console. Only draft leaderboards can be reset.
* `games_management_scores_reset_multiple_for_all_players` - Resets scores for the leaderboards with the given IDs for all players. This method is only available to user accounts for your developer console. Only draft leaderboards may be reset.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
