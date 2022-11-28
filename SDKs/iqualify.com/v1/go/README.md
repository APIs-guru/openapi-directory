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
    opts := []sdk.SDKOption{
        sdk.WithSecurity(
            shared.Security{
                Authorization: shared.SchemeAuthorization{
                    APIKey: "YOUR_API_KEY_HERE",
                },
            }
        ),
    }

    s := sdk.New(opts...)
    
    req := operations.DeleteCourseMappingsOfferingIDExternalCourseIDRequest{
        PathParams: operations.DeleteCourseMappingsOfferingIDExternalCourseIDPathParams{
            ExternalCourseID: "et",
            OfferingID: "quo",
        },
    }
    
    res, err := s.Sdk.DeleteCourseMappingsOfferingIDExternalCourseID(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteCourseMappingsOfferingIDExternalCourseID200ApplicationJSONStrings != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `DeleteCourseMappingsOfferingIDExternalCourseID` - Remove course mapping
* `DeleteOfferingsOfferingIDAssessmentsAssessmentIDDocumentsDocumentID` - Remove assessment document
* `DeleteOfferingsOfferingIDChannelsChannelIDLearners` - Remove learners from a group channel
* `DeleteOfferingsOfferingIDGroupsGroupIDLearnersUserEmail` - Remove a learner from an assessment group
* `DeleteOfferingsOfferingIDUsersMarkerEmailMarks` - Remove learners from coach's marking list
* `DeleteOfferingsOfferingIDUsersUserEmail` - Removes user from the offering
* `DeleteOfferingsOfferingIDUsersUserEmailAssessmentsAssessmentID` - Reset user's assessment to draft state
* `Get` - List supported endpoints URLs
* `GetCourseMappings` - Find course mappings
* `GetCourseMappingsExternalcourseExternalCourseID` - Find course mappings by externalCourseId
* `GetCourseMappingsOfferingID` - Find course mappings by offeringId
* `GetCourses` - Find courses
* `GetCoursesContentID` - Find course by contentId
* `GetCoursesContentIDActivations` - Find activations for a contentId
* `GetCoursesContentIDPermissions` - Find users who have access to the contentId provided
* `GetOfferings` - Find current, past and future offerings
* `GetOfferingsCurrent` - Find active offerings
* `GetOfferingsFuture` - Find scheduled offerings
* `GetOfferingsInfoTextPattern` - Find offerings where info field matches the specified textPattern
* `GetOfferingsOfferingID` - Find offering by ID
* `GetOfferingsOfferingIDActivitiesOpenresponse` - Find offering's activities
* `GetOfferingsOfferingIDAnalyticsActivitiesResponses` - Find open response activity attempts
* `GetOfferingsOfferingIDAnalyticsChannelsChannelIDComments` - Find comments
* `GetOfferingsOfferingIDAnalyticsChannelsChannelIDPosts` - Find posts
* `GetOfferingsOfferingIDAnalyticsChannelsChannelIDReplies` - Find replies
* `GetOfferingsOfferingIDAnalyticsLearnersProgress` - Find learner progress in a specified offering
* `GetOfferingsOfferingIDAnalyticsMarksAssignments` - Find assessment marks
* `GetOfferingsOfferingIDAnalyticsMarksQuizzes` - Find quiz marks
* `GetOfferingsOfferingIDAnalyticsPulses` - Find all pulse IDs in the specified offering
* `GetOfferingsOfferingIDAnalyticsPulsesPulseIDResponses` - Find pulses by offeringId and pulseId
* `GetOfferingsOfferingIDAnalyticsSocialNotes` - Find shared social notes in an offering
* `GetOfferingsOfferingIDAnalyticsSubmissionsAssignments` - Find submissions to assessments, including marks if any
* `GetOfferingsOfferingIDAnalyticsSubmissionsOpenResponseAssessmentID` - Find submissions to a specified open response assessment, including marks if any
* `GetOfferingsOfferingIDAnalyticsSubmissionsUserEmailAssignmentsAssessmentID` - Find a learner's submission to a specified assessment, including marks if any
* `GetOfferingsOfferingIDAnalyticsUnitReactions` - Find unit reactions
* `GetOfferingsOfferingIDAssessments` - Find offering's assessments
* `GetOfferingsOfferingIDBadges` - Find offering badges
* `GetOfferingsOfferingIDChannels` - Find channels
* `GetOfferingsOfferingIDChannelsChannelIDLearners` - Find learners in a group channel
* `GetOfferingsOfferingIDGroups` - Find assessment groups
* `GetOfferingsOfferingIDGroupsGroupIDLearners` - Find learners in an assessment group
* `GetOfferingsOfferingIDLearnersPendingSubmission` - Find learners with assessments pending x days before due date within the specified offeringId
* `GetOfferingsOfferingIDUsers` - Find offering's users
* `GetOfferingsOfferingIDUsersMarkerEmailMarks` - Find Learners marked by a coach
* `GetOfferingsOfferingIDUsersUserEmailSubmissionsOpenResponse` - Find learner's open response assessment submissions
* `GetOfferingsPast` - Find past offerings
* `GetOrg` - Gets the current organisation
* `GetUsersUserEmail` - Find user by email
* `GetUsersUserEmailBadges` - Find user's badges
* `GetUsersUserEmailOfferings` - Find user's offerings
* `GetUsersUserEmailOfferingsOfferingIDProgress` - Find learner's progress in a specified offering
* `GetUsersUserEmailProgress` - Find learner's progress in offerings
* `PatchOfferingsOfferingID` - Update offering
* `PatchOfferingsOfferingIDAssessmentsAssessmentID` - Update assessment details
* `PatchOfferingsOfferingIDAssessmentsAssessmentIDUserEmail` - Update the due dates for a learner's quiz attempt
* `PatchOfferingsOfferingIDChannelsChannelID` - Update channel
* `PatchUsersUserEmail` - Update user
* `PatchUsersUserEmailTransfer` - Transfer a user between offerings
* `PostCoursesRootContentIDPermissionsUserEmail` - Update course access
* `PostOfferings` - Create offering
* `PostOfferingsOfferingIDChannels` - Add channel
* `PostOfferingsOfferingIDChannelsChannelIDLearners` - Add learners to a group channel
* `PostOfferingsOfferingIDGroups` - Add an assessment group
* `PostOfferingsOfferingIDGroupsGroupIDLearners` - Add a learner to an assessment group
* `PostOfferingsOfferingIDUsers` - Adds user to the offering
* `PostOfferingsOfferingIDUsersMarkerEmailMarks` - Add learners to be marked by a coach
* `PostOfferingsOfferingIDUsersUserEmailBadgesAward` - Award badge
* `PostUsers` - Add new user
* `PostUsersUserEmailInviteEmail` - Resend invitation email
* `PostUsersUserEmailOfferings` - Adds the user to the specified offerings as a learner
* `PostUsersUserEmailPermissionsPermissionName` - Add permission to user
* `PutCourseMappingsOfferingIDExternalCourseID` - Add course mapping
* `PutCoursesContentIDMetadataCategory` - Update course category
* `PutCoursesContentIDMetadataLevel` - Update course level
* `PutCoursesContentIDMetadataTags` - Update course tags
* `PutCoursesContentIDMetadataTopic` - Update course topic
* `PutOfferingsOfferingIDMetadataCategory` - Update offering category metadata
* `PutOfferingsOfferingIDMetadataLevel` - Update offering level metadata
* `PutOfferingsOfferingIDMetadataTags` - Update offering tags metadata
* `PutOfferingsOfferingIDMetadataTopic` - Update offering topic metadata
* `PutUsersUserEmailSuspend` - Suspend user

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
