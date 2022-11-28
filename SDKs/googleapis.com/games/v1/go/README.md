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
    
    req := operations.GamesAchievementDefinitionsListRequest{
        Security: operations.GamesAchievementDefinitionsListSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            }
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        QueryParams: operations.GamesAchievementDefinitionsListQueryParams{
            DollarXgafv: "2",
            AccessToken: "iusto",
            Alt: "proto",
            Callback: "accusantium",
            Fields: "eaque",
            Key: "eaque",
            Language: "dicta",
            MaxResults: 1126920409312496146,
            OauthToken: "ea",
            PageToken: "delectus",
            PrettyPrint: true,
            QuotaUser: "hic",
            UploadType: "quasi",
            UploadProtocol: "eum",
        },
    }
    
    res, err := s.AchievementDefinitions.GamesAchievementDefinitionsList(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AchievementDefinitionsListResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### achievementDefinitions

* `GamesAchievementDefinitionsList` - Lists all the achievement definitions for your application.

### achievements

* `GamesAchievementsIncrement` - Increments the steps of the achievement with the given ID for the currently authenticated player.
* `GamesAchievementsList` - Lists the progress for all your application's achievements for the currently authenticated player.
* `GamesAchievementsReveal` - Sets the state of the achievement with the given ID to `REVEALED` for the currently authenticated player.
* `GamesAchievementsSetStepsAtLeast` - Sets the steps for the currently authenticated player towards unlocking an achievement. If the steps parameter is less than the current number of steps that the player already gained for the achievement, the achievement is not modified.
* `GamesAchievementsUnlock` - Unlocks this achievement for the currently authenticated player.
* `GamesAchievementsUpdateMultiple` - Updates multiple achievements for the currently authenticated player.

### applications

* `GamesApplicationsGet` - Retrieves the metadata of the application with the given ID. If the requested application is not available for the specified `platformType`, the returned response will not include any instance data.
* `GamesApplicationsGetEndPoint` - Returns a URL for the requested end point type.
* `GamesApplicationsPlayed` - Indicate that the currently authenticated user is playing your application.
* `GamesApplicationsVerify` - Verifies the auth token provided with this request is for the application with the specified ID, and returns the ID of the player it was granted for.

### events

* `GamesEventsListByPlayer` - Returns a list showing the current progress on events in this application for the currently authenticated user.
* `GamesEventsListDefinitions` - Returns a list of the event definitions in this application.
* `GamesEventsRecord` - Records a batch of changes to the number of times events have occurred for the currently authenticated user of this application.

### leaderboards

* `GamesLeaderboardsGet` - Retrieves the metadata of the leaderboard with the given ID.
* `GamesLeaderboardsList` - Lists all the leaderboard metadata for your application.

### metagame

* `GamesMetagameGetMetagameConfig` - Return the metagame configuration data for the calling application.
* `GamesMetagameListCategoriesByPlayer` - List play data aggregated per category for the player corresponding to `playerId`.

### players

* `GamesPlayersGet` - Retrieves the Player resource with the given ID. To retrieve the player for the currently authenticated user, set `playerId` to `me`.
* `GamesPlayersGetScopedPlayerIds` - Retrieves scoped player identifiers for currently authenticated user.
* `GamesPlayersList` - Get the collection of players for the currently authenticated user.

### revisions

* `GamesRevisionsCheck` - Checks whether the games client is out of date.

### scores

* `GamesScoresGet` - Get high scores, and optionally ranks, in leaderboards for the currently authenticated player. For a specific time span, `leaderboardId` can be set to `ALL` to retrieve data for all leaderboards in a given time span. `NOTE: You cannot ask for 'ALL' leaderboards and 'ALL' timeSpans in the same request; only one parameter may be set to 'ALL'.
* `GamesScoresList` - Lists the scores in a leaderboard, starting from the top.
* `GamesScoresListWindow` - Lists the scores in a leaderboard around (and including) a player's score.
* `GamesScoresSubmit` - Submits a score to the specified leaderboard.
* `GamesScoresSubmitMultiple` - Submits multiple scores to leaderboards.

### snapshots

* `GamesSnapshotsGet` - Retrieves the metadata for a given snapshot ID.
* `GamesSnapshotsList` - Retrieves a list of snapshots created by your application for the player corresponding to the player ID.

### stats

* `GamesStatsGet` - Returns engagement and spend statistics in this application for the currently authenticated user.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
