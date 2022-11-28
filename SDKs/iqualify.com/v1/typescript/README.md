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
import { DeleteCourseMappingsOfferingIdExternalCourseIdRequest, DeleteCourseMappingsOfferingIdExternalCourseIdResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(WithSecurity(
  security: {
    authorization: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: DeleteCourseMappingsOfferingIdExternalCourseIdRequest = {
  pathParams: {
    externalCourseId: "et",
    offeringId: "quo",
  },
};

sdk.sdk.deleteCourseMappingsOfferingIdExternalCourseId(req).then((res: DeleteCourseMappingsOfferingIdExternalCourseIdResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `deleteCourseMappingsOfferingIdExternalCourseId` - Remove course mapping
* `deleteOfferingsOfferingIdAssessmentsAssessmentIdDocumentsDocumentId` - Remove assessment document
* `deleteOfferingsOfferingIdChannelsChannelIdLearners` - Remove learners from a group channel
* `deleteOfferingsOfferingIdGroupsGroupIdLearnersUserEmail` - Remove a learner from an assessment group
* `deleteOfferingsOfferingIdUsersMarkerEmailMarks` - Remove learners from coach's marking list
* `deleteOfferingsOfferingIdUsersUserEmail` - Removes user from the offering
* `deleteOfferingsOfferingIdUsersUserEmailAssessmentsAssessmentId` - Reset user's assessment to draft state
* `get` - List supported endpoints URLs
* `getCourseMappings` - Find course mappings
* `getCourseMappingsExternalcourseExternalCourseId` - Find course mappings by externalCourseId
* `getCourseMappingsOfferingId` - Find course mappings by offeringId
* `getCourses` - Find courses
* `getCoursesContentId` - Find course by contentId
* `getCoursesContentIdActivations` - Find activations for a contentId
* `getCoursesContentIdPermissions` - Find users who have access to the contentId provided
* `getOfferings` - Find current, past and future offerings
* `getOfferingsCurrent` - Find active offerings
* `getOfferingsFuture` - Find scheduled offerings
* `getOfferingsInfoTextPattern` - Find offerings where info field matches the specified textPattern
* `getOfferingsOfferingId` - Find offering by ID
* `getOfferingsOfferingIdActivitiesOpenresponse` - Find offering's activities
* `getOfferingsOfferingIdAnalyticsActivitiesResponses` - Find open response activity attempts
* `getOfferingsOfferingIdAnalyticsChannelsChannelIdComments` - Find comments
* `getOfferingsOfferingIdAnalyticsChannelsChannelIdPosts` - Find posts
* `getOfferingsOfferingIdAnalyticsChannelsChannelIdReplies` - Find replies
* `getOfferingsOfferingIdAnalyticsLearnersProgress` - Find learner progress in a specified offering
* `getOfferingsOfferingIdAnalyticsMarksAssignments` - Find assessment marks
* `getOfferingsOfferingIdAnalyticsMarksQuizzes` - Find quiz marks
* `getOfferingsOfferingIdAnalyticsPulses` - Find all pulse IDs in the specified offering
* `getOfferingsOfferingIdAnalyticsPulsesPulseIdResponses` - Find pulses by offeringId and pulseId
* `getOfferingsOfferingIdAnalyticsSocialNotes` - Find shared social notes in an offering
* `getOfferingsOfferingIdAnalyticsSubmissionsAssignments` - Find submissions to assessments, including marks if any
* `getOfferingsOfferingIdAnalyticsSubmissionsOpenResponseAssessmentId` - Find submissions to a specified open response assessment, including marks if any
* `getOfferingsOfferingIdAnalyticsSubmissionsUserEmailAssignmentsAssessmentId` - Find a learner's submission to a specified assessment, including marks if any
* `getOfferingsOfferingIdAnalyticsUnitReactions` - Find unit reactions
* `getOfferingsOfferingIdAssessments` - Find offering's assessments
* `getOfferingsOfferingIdBadges` - Find offering badges
* `getOfferingsOfferingIdChannels` - Find channels
* `getOfferingsOfferingIdChannelsChannelIdLearners` - Find learners in a group channel
* `getOfferingsOfferingIdGroups` - Find assessment groups
* `getOfferingsOfferingIdGroupsGroupIdLearners` - Find learners in an assessment group
* `getOfferingsOfferingIdLearnersPendingSubmission` - Find learners with assessments pending x days before due date within the specified offeringId
* `getOfferingsOfferingIdUsers` - Find offering's users
* `getOfferingsOfferingIdUsersMarkerEmailMarks` - Find Learners marked by a coach
* `getOfferingsOfferingIdUsersUserEmailSubmissionsOpenResponse` - Find learner's open response assessment submissions
* `getOfferingsPast` - Find past offerings
* `getOrg` - Gets the current organisation
* `getUsersUserEmail` - Find user by email
* `getUsersUserEmailBadges` - Find user's badges
* `getUsersUserEmailOfferings` - Find user's offerings
* `getUsersUserEmailOfferingsOfferingIdProgress` - Find learner's progress in a specified offering
* `getUsersUserEmailProgress` - Find learner's progress in offerings
* `patchOfferingsOfferingId` - Update offering
* `patchOfferingsOfferingIdAssessmentsAssessmentId` - Update assessment details
* `patchOfferingsOfferingIdAssessmentsAssessmentIdUserEmail` - Update the due dates for a learner's quiz attempt
* `patchOfferingsOfferingIdChannelsChannelId` - Update channel
* `patchUsersUserEmail` - Update user
* `patchUsersUserEmailTransfer` - Transfer a user between offerings
* `postCoursesRootContentIdPermissionsUserEmail` - Update course access
* `postOfferings` - Create offering
* `postOfferingsOfferingIdChannels` - Add channel
* `postOfferingsOfferingIdChannelsChannelIdLearners` - Add learners to a group channel
* `postOfferingsOfferingIdGroups` - Add an assessment group
* `postOfferingsOfferingIdGroupsGroupIdLearners` - Add a learner to an assessment group
* `postOfferingsOfferingIdUsers` - Adds user to the offering
* `postOfferingsOfferingIdUsersMarkerEmailMarks` - Add learners to be marked by a coach
* `postOfferingsOfferingIdUsersUserEmailBadgesAward` - Award badge
* `postUsers` - Add new user
* `postUsersUserEmailInviteEmail` - Resend invitation email
* `postUsersUserEmailOfferings` - Adds the user to the specified offerings as a learner
* `postUsersUserEmailPermissionsPermissionName` - Add permission to user
* `putCourseMappingsOfferingIdExternalCourseId` - Add course mapping
* `putCoursesContentIdMetadataCategory` - Update course category
* `putCoursesContentIdMetadataLevel` - Update course level
* `putCoursesContentIdMetadataTags` - Update course tags
* `putCoursesContentIdMetadataTopic` - Update course topic
* `putOfferingsOfferingIdMetadataCategory` - Update offering category metadata
* `putOfferingsOfferingIdMetadataLevel` - Update offering level metadata
* `putOfferingsOfferingIdMetadataTags` - Update offering tags metadata
* `putOfferingsOfferingIdMetadataTopic` - Update offering topic metadata
* `putUsersUserEmailSuspend` - Suspend user

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
