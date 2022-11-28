# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add openapi
```

### Yarn

```bash
yarn add openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```typescript
import { SDK, WithSecurity} from "openapi";
import { GamesAchievementDefinitionsListRequest, GamesAchievementDefinitionsListResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: GamesAchievementDefinitionsListRequest = {
  security: {
    oauth2: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    }
    oauth2c: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
  },
  queryParams: {
    dollarXgafv: "2",
    accessToken: "iusto",
    alt: "proto",
    callback: "accusantium",
    fields: "eaque",
    key: "eaque",
    language: "dicta",
    maxResults: 1126920409312496146,
    oauthToken: "ea",
    pageToken: "delectus",
    prettyPrint: true,
    quotaUser: "hic",
    uploadType: "quasi",
    uploadProtocol: "eum",
  },
};

sdk.achievementDefinitions.gamesAchievementDefinitionsList(req).then((res: GamesAchievementDefinitionsListResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### achievementDefinitions

* `gamesAchievementDefinitionsList` - Lists all the achievement definitions for your application.

### achievements

* `gamesAchievementsIncrement` - Increments the steps of the achievement with the given ID for the currently authenticated player.
* `gamesAchievementsList` - Lists the progress for all your application's achievements for the currently authenticated player.
* `gamesAchievementsReveal` - Sets the state of the achievement with the given ID to `REVEALED` for the currently authenticated player.
* `gamesAchievementsSetStepsAtLeast` - Sets the steps for the currently authenticated player towards unlocking an achievement. If the steps parameter is less than the current number of steps that the player already gained for the achievement, the achievement is not modified.
* `gamesAchievementsUnlock` - Unlocks this achievement for the currently authenticated player.
* `gamesAchievementsUpdateMultiple` - Updates multiple achievements for the currently authenticated player.

### applications

* `gamesApplicationsGet` - Retrieves the metadata of the application with the given ID. If the requested application is not available for the specified `platformType`, the returned response will not include any instance data.
* `gamesApplicationsGetEndPoint` - Returns a URL for the requested end point type.
* `gamesApplicationsPlayed` - Indicate that the currently authenticated user is playing your application.
* `gamesApplicationsVerify` - Verifies the auth token provided with this request is for the application with the specified ID, and returns the ID of the player it was granted for.

### events

* `gamesEventsListByPlayer` - Returns a list showing the current progress on events in this application for the currently authenticated user.
* `gamesEventsListDefinitions` - Returns a list of the event definitions in this application.
* `gamesEventsRecord` - Records a batch of changes to the number of times events have occurred for the currently authenticated user of this application.

### leaderboards

* `gamesLeaderboardsGet` - Retrieves the metadata of the leaderboard with the given ID.
* `gamesLeaderboardsList` - Lists all the leaderboard metadata for your application.

### metagame

* `gamesMetagameGetMetagameConfig` - Return the metagame configuration data for the calling application.
* `gamesMetagameListCategoriesByPlayer` - List play data aggregated per category for the player corresponding to `playerId`.

### players

* `gamesPlayersGet` - Retrieves the Player resource with the given ID. To retrieve the player for the currently authenticated user, set `playerId` to `me`.
* `gamesPlayersGetScopedPlayerIds` - Retrieves scoped player identifiers for currently authenticated user.
* `gamesPlayersList` - Get the collection of players for the currently authenticated user.

### revisions

* `gamesRevisionsCheck` - Checks whether the games client is out of date.

### scores

* `gamesScoresGet` - Get high scores, and optionally ranks, in leaderboards for the currently authenticated player. For a specific time span, `leaderboardId` can be set to `ALL` to retrieve data for all leaderboards in a given time span. `NOTE: You cannot ask for 'ALL' leaderboards and 'ALL' timeSpans in the same request; only one parameter may be set to 'ALL'.
* `gamesScoresList` - Lists the scores in a leaderboard, starting from the top.
* `gamesScoresListWindow` - Lists the scores in a leaderboard around (and including) a player's score.
* `gamesScoresSubmit` - Submits a score to the specified leaderboard.
* `gamesScoresSubmitMultiple` - Submits multiple scores to leaderboards.

### snapshots

* `gamesSnapshotsGet` - Retrieves the metadata for a given snapshot ID.
* `gamesSnapshotsList` - Retrieves a list of snapshots created by your application for the player corresponding to the player ID.

### stats

* `gamesStatsGet` - Returns engagement and spend statistics in this application for the currently authenticated user.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
