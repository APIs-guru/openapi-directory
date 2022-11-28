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
    
    req := operations.GamesManagementAchievementsResetRequest{
        Security: operations.GamesManagementAchievementsResetSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            }
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.GamesManagementAchievementsResetPathParams{
            AchievementID: "harum",
        },
        QueryParams: operations.GamesManagementAchievementsResetQueryParams{
            DollarXgafv: "1",
            AccessToken: "harum",
            Alt: "media",
            Callback: "reprehenderit",
            Fields: "cupiditate",
            Key: "sint",
            OauthToken: "quibusdam",
            PrettyPrint: true,
            QuotaUser: "illum",
            UploadType: "nihil",
            UploadProtocol: "magni",
        },
    }
    
    res, err := s.Achievements.GamesManagementAchievementsReset(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AchievementResetResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### achievements

* `GamesManagementAchievementsReset` - Resets the achievement with the given ID for the currently authenticated player. This method is only accessible to whitelisted tester accounts for your application.
* `GamesManagementAchievementsResetAll` - Resets all achievements for the currently authenticated player for your application. This method is only accessible to whitelisted tester accounts for your application.
* `GamesManagementAchievementsResetAllForAllPlayers` - Resets all draft achievements for all players. This method is only available to user accounts for your developer console.
* `GamesManagementAchievementsResetForAllPlayers` - Resets the achievement with the given ID for all players. This method is only available to user accounts for your developer console. Only draft achievements can be reset.
* `GamesManagementAchievementsResetMultipleForAllPlayers` - Resets achievements with the given IDs for all players. This method is only available to user accounts for your developer console. Only draft achievements may be reset.

### applications

* `GamesManagementApplicationsListHidden` - Get the list of players hidden from the given application. This method is only available to user accounts for your developer console.

### events

* `GamesManagementEventsReset` - Resets all player progress on the event with the given ID for the currently authenticated player. This method is only accessible to whitelisted tester accounts for your application.
* `GamesManagementEventsResetAll` - Resets all player progress on all events for the currently authenticated player. This method is only accessible to whitelisted tester accounts for your application.
* `GamesManagementEventsResetAllForAllPlayers` - Resets all draft events for all players. This method is only available to user accounts for your developer console.
* `GamesManagementEventsResetForAllPlayers` - Resets the event with the given ID for all players. This method is only available to user accounts for your developer console. Only draft events can be reset.
* `GamesManagementEventsResetMultipleForAllPlayers` - Resets events with the given IDs for all players. This method is only available to user accounts for your developer console. Only draft events may be reset.

### players

* `GamesManagementPlayersHide` - Hide the given player's leaderboard scores from the given application. This method is only available to user accounts for your developer console.
* `GamesManagementPlayersUnhide` - Unhide the given player's leaderboard scores from the given application. This method is only available to user accounts for your developer console.

### scores

* `GamesManagementScoresReset` - Resets scores for the leaderboard with the given ID for the currently authenticated player. This method is only accessible to whitelisted tester accounts for your application.
* `GamesManagementScoresResetAll` - Resets all scores for all leaderboards for the currently authenticated players. This method is only accessible to whitelisted tester accounts for your application.
* `GamesManagementScoresResetAllForAllPlayers` - Resets scores for all draft leaderboards for all players. This method is only available to user accounts for your developer console.
* `GamesManagementScoresResetForAllPlayers` - Resets scores for the leaderboard with the given ID for all players. This method is only available to user accounts for your developer console. Only draft leaderboards can be reset.
* `GamesManagementScoresResetMultipleForAllPlayers` - Resets scores for the leaderboards with the given IDs for all players. This method is only available to user accounts for your developer console. Only draft leaderboards may be reset.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
