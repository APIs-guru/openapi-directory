package shared

type PropertyValueSourceEnum string

const (
	PropertyValueSourceEnumImport                      PropertyValueSourceEnum = "IMPORT"
	PropertyValueSourceEnumAPI                         PropertyValueSourceEnum = "API"
	PropertyValueSourceEnumForm                        PropertyValueSourceEnum = "FORM"
	PropertyValueSourceEnumAnalytics                   PropertyValueSourceEnum = "ANALYTICS"
	PropertyValueSourceEnumMigration                   PropertyValueSourceEnum = "MIGRATION"
	PropertyValueSourceEnumSalesforce                  PropertyValueSourceEnum = "SALESFORCE"
	PropertyValueSourceEnumIntegration                 PropertyValueSourceEnum = "INTEGRATION"
	PropertyValueSourceEnumContactsWeb                 PropertyValueSourceEnum = "CONTACTS_WEB"
	PropertyValueSourceEnumWalIncremental              PropertyValueSourceEnum = "WAL_INCREMENTAL"
	PropertyValueSourceEnumTask                        PropertyValueSourceEnum = "TASK"
	PropertyValueSourceEnumEmail                       PropertyValueSourceEnum = "EMAIL"
	PropertyValueSourceEnumWorkflows                   PropertyValueSourceEnum = "WORKFLOWS"
	PropertyValueSourceEnumCalculated                  PropertyValueSourceEnum = "CALCULATED"
	PropertyValueSourceEnumSocial                      PropertyValueSourceEnum = "SOCIAL"
	PropertyValueSourceEnumBatchUpdate                 PropertyValueSourceEnum = "BATCH_UPDATE"
	PropertyValueSourceEnumSignals                     PropertyValueSourceEnum = "SIGNALS"
	PropertyValueSourceEnumBiden                       PropertyValueSourceEnum = "BIDEN"
	PropertyValueSourceEnumDefault                     PropertyValueSourceEnum = "DEFAULT"
	PropertyValueSourceEnumCompanies                   PropertyValueSourceEnum = "COMPANIES"
	PropertyValueSourceEnumDeals                       PropertyValueSourceEnum = "DEALS"
	PropertyValueSourceEnumAssists                     PropertyValueSourceEnum = "ASSISTS"
	PropertyValueSourceEnumPresentations               PropertyValueSourceEnum = "PRESENTATIONS"
	PropertyValueSourceEnumTally                       PropertyValueSourceEnum = "TALLY"
	PropertyValueSourceEnumSidekick                    PropertyValueSourceEnum = "SIDEKICK"
	PropertyValueSourceEnumCrmUI                       PropertyValueSourceEnum = "CRM_UI"
	PropertyValueSourceEnumMergeContacts               PropertyValueSourceEnum = "MERGE_CONTACTS"
	PropertyValueSourceEnumPortalUserAssociator        PropertyValueSourceEnum = "PORTAL_USER_ASSOCIATOR"
	PropertyValueSourceEnumIntegrationsPlatform        PropertyValueSourceEnum = "INTEGRATIONS_PLATFORM"
	PropertyValueSourceEnumBccToCrm                    PropertyValueSourceEnum = "BCC_TO_CRM"
	PropertyValueSourceEnumForwardToCrm                PropertyValueSourceEnum = "FORWARD_TO_CRM"
	PropertyValueSourceEnumEngagements                 PropertyValueSourceEnum = "ENGAGEMENTS"
	PropertyValueSourceEnumSales                       PropertyValueSourceEnum = "SALES"
	PropertyValueSourceEnumHeisenberg                  PropertyValueSourceEnum = "HEISENBERG"
	PropertyValueSourceEnumLeadin                      PropertyValueSourceEnum = "LEADIN"
	PropertyValueSourceEnumGmailIntegration            PropertyValueSourceEnum = "GMAIL_INTEGRATION"
	PropertyValueSourceEnumAcademy                     PropertyValueSourceEnum = "ACADEMY"
	PropertyValueSourceEnumSalesMessages               PropertyValueSourceEnum = "SALES_MESSAGES"
	PropertyValueSourceEnumAvatarsService              PropertyValueSourceEnum = "AVATARS_SERVICE"
	PropertyValueSourceEnumMergeCompanies              PropertyValueSourceEnum = "MERGE_COMPANIES"
	PropertyValueSourceEnumSequences                   PropertyValueSourceEnum = "SEQUENCES"
	PropertyValueSourceEnumCompanyFamilies             PropertyValueSourceEnum = "COMPANY_FAMILIES"
	PropertyValueSourceEnumMobileIos                   PropertyValueSourceEnum = "MOBILE_IOS"
	PropertyValueSourceEnumMobileAndroid               PropertyValueSourceEnum = "MOBILE_ANDROID"
	PropertyValueSourceEnumContacts                    PropertyValueSourceEnum = "CONTACTS"
	PropertyValueSourceEnumAssociations                PropertyValueSourceEnum = "ASSOCIATIONS"
	PropertyValueSourceEnumExtension                   PropertyValueSourceEnum = "EXTENSION"
	PropertyValueSourceEnumSuccess                     PropertyValueSourceEnum = "SUCCESS"
	PropertyValueSourceEnumBot                         PropertyValueSourceEnum = "BOT"
	PropertyValueSourceEnumIntegrationsSync            PropertyValueSourceEnum = "INTEGRATIONS_SYNC"
	PropertyValueSourceEnumAutomationPlatform          PropertyValueSourceEnum = "AUTOMATION_PLATFORM"
	PropertyValueSourceEnumConversations               PropertyValueSourceEnum = "CONVERSATIONS"
	PropertyValueSourceEnumEmailIntegration            PropertyValueSourceEnum = "EMAIL_INTEGRATION"
	PropertyValueSourceEnumContentMembership           PropertyValueSourceEnum = "CONTENT_MEMBERSHIP"
	PropertyValueSourceEnumQuotes                      PropertyValueSourceEnum = "QUOTES"
	PropertyValueSourceEnumBetAssignment               PropertyValueSourceEnum = "BET_ASSIGNMENT"
	PropertyValueSourceEnumQuotas                      PropertyValueSourceEnum = "QUOTAS"
	PropertyValueSourceEnumBetCrmConnector             PropertyValueSourceEnum = "BET_CRM_CONNECTOR"
	PropertyValueSourceEnumMeetings                    PropertyValueSourceEnum = "MEETINGS"
	PropertyValueSourceEnumMergeObjects                PropertyValueSourceEnum = "MERGE_OBJECTS"
	PropertyValueSourceEnumRecyclingBin                PropertyValueSourceEnum = "RECYCLING_BIN"
	PropertyValueSourceEnumAds                         PropertyValueSourceEnum = "ADS"
	PropertyValueSourceEnumAiGroup                     PropertyValueSourceEnum = "AI_GROUP"
	PropertyValueSourceEnumCommunicator                PropertyValueSourceEnum = "COMMUNICATOR"
	PropertyValueSourceEnumSettings                    PropertyValueSourceEnum = "SETTINGS"
	PropertyValueSourceEnumPropertySettings            PropertyValueSourceEnum = "PROPERTY_SETTINGS"
	PropertyValueSourceEnumPipelineSettings            PropertyValueSourceEnum = "PIPELINE_SETTINGS"
	PropertyValueSourceEnumCompanyInsights             PropertyValueSourceEnum = "COMPANY_INSIGHTS"
	PropertyValueSourceEnumBehavioralEvents            PropertyValueSourceEnum = "BEHAVIORAL_EVENTS"
	PropertyValueSourceEnumPayments                    PropertyValueSourceEnum = "PAYMENTS"
	PropertyValueSourceEnumGoals                       PropertyValueSourceEnum = "GOALS"
	PropertyValueSourceEnumPortalObjectSync            PropertyValueSourceEnum = "PORTAL_OBJECT_SYNC"
	PropertyValueSourceEnumApprovals                   PropertyValueSourceEnum = "APPROVALS"
	PropertyValueSourceEnumFileManager                 PropertyValueSourceEnum = "FILE_MANAGER"
	PropertyValueSourceEnumMarketplace                 PropertyValueSourceEnum = "MARKETPLACE"
	PropertyValueSourceEnumInternalProcessing          PropertyValueSourceEnum = "INTERNAL_PROCESSING"
	PropertyValueSourceEnumForecasting                 PropertyValueSourceEnum = "FORECASTING"
	PropertyValueSourceEnumSlackIntegration            PropertyValueSourceEnum = "SLACK_INTEGRATION"
	PropertyValueSourceEnumCrmUIBulkAction             PropertyValueSourceEnum = "CRM_UI_BULK_ACTION"
	PropertyValueSourceEnumWorkflowContactDeleteAction PropertyValueSourceEnum = "WORKFLOW_CONTACT_DELETE_ACTION"
)

type PropertyValue struct {
	Name                    string                  `json:"name"`
	RequestID               string                  `json:"requestId"`
	SelectedByUser          bool                    `json:"selectedByUser"`
	SelectedByUserTimestamp int64                   `json:"selectedByUserTimestamp"`
	Source                  PropertyValueSourceEnum `json:"source"`
	SourceID                string                  `json:"sourceId"`
	SourceLabel             string                  `json:"sourceLabel"`
	SourceMetadata          string                  `json:"sourceMetadata"`
	SourceVid               []int64                 `json:"sourceVid"`
	Timestamp               int64                   `json:"timestamp"`
	UpdatedByUserID         *int32                  `json:"updatedByUserId,omitempty"`
	Value                   string                  `json:"value"`
}
