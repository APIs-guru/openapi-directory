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
import { GamesManagementAchievementsResetRequest, GamesManagementAchievementsResetResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: GamesManagementAchievementsResetRequest = {
  security: {
    oauth2: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    }
    oauth2c: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
  },
  pathParams: {
    achievementId: "harum",
  },
  queryParams: {
    dollarXgafv: "1",
    accessToken: "harum",
    alt: "media",
    callback: "reprehenderit",
    fields: "cupiditate",
    key: "sint",
    oauthToken: "quibusdam",
    prettyPrint: true,
    quotaUser: "illum",
    uploadType: "nihil",
    uploadProtocol: "magni",
  },
};

sdk.achievements.gamesManagementAchievementsReset(req).then((res: GamesManagementAchievementsResetResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### achievements

* `gamesManagementAchievementsReset` - Resets the achievement with the given ID for the currently authenticated player. This method is only accessible to whitelisted tester accounts for your application.
* `gamesManagementAchievementsResetAll` - Resets all achievements for the currently authenticated player for your application. This method is only accessible to whitelisted tester accounts for your application.
* `gamesManagementAchievementsResetAllForAllPlayers` - Resets all draft achievements for all players. This method is only available to user accounts for your developer console.
* `gamesManagementAchievementsResetForAllPlayers` - Resets the achievement with the given ID for all players. This method is only available to user accounts for your developer console. Only draft achievements can be reset.
* `gamesManagementAchievementsResetMultipleForAllPlayers` - Resets achievements with the given IDs for all players. This method is only available to user accounts for your developer console. Only draft achievements may be reset.

### applications

* `gamesManagementApplicationsListHidden` - Get the list of players hidden from the given application. This method is only available to user accounts for your developer console.

### events

* `gamesManagementEventsReset` - Resets all player progress on the event with the given ID for the currently authenticated player. This method is only accessible to whitelisted tester accounts for your application.
* `gamesManagementEventsResetAll` - Resets all player progress on all events for the currently authenticated player. This method is only accessible to whitelisted tester accounts for your application.
* `gamesManagementEventsResetAllForAllPlayers` - Resets all draft events for all players. This method is only available to user accounts for your developer console.
* `gamesManagementEventsResetForAllPlayers` - Resets the event with the given ID for all players. This method is only available to user accounts for your developer console. Only draft events can be reset.
* `gamesManagementEventsResetMultipleForAllPlayers` - Resets events with the given IDs for all players. This method is only available to user accounts for your developer console. Only draft events may be reset.

### players

* `gamesManagementPlayersHide` - Hide the given player's leaderboard scores from the given application. This method is only available to user accounts for your developer console.
* `gamesManagementPlayersUnhide` - Unhide the given player's leaderboard scores from the given application. This method is only available to user accounts for your developer console.

### scores

* `gamesManagementScoresReset` - Resets scores for the leaderboard with the given ID for the currently authenticated player. This method is only accessible to whitelisted tester accounts for your application.
* `gamesManagementScoresResetAll` - Resets all scores for all leaderboards for the currently authenticated players. This method is only accessible to whitelisted tester accounts for your application.
* `gamesManagementScoresResetAllForAllPlayers` - Resets scores for all draft leaderboards for all players. This method is only available to user accounts for your developer console.
* `gamesManagementScoresResetForAllPlayers` - Resets scores for the leaderboard with the given ID for all players. This method is only available to user accounts for your developer console. Only draft leaderboards can be reset.
* `gamesManagementScoresResetMultipleForAllPlayers` - Resets scores for the leaderboards with the given IDs for all players. This method is only available to user accounts for your developer console. Only draft leaderboards may be reset.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
