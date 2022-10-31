package shared

import (
"time")

type Campaign struct {
    AccountID *string `json:"accountId,omitempty"`
    AdBlockingConfiguration *AdBlockingConfiguration `json:"adBlockingConfiguration,omitempty"`
    AdditionalCreativeOptimizationConfigurations []CreativeOptimizationConfiguration `json:"additionalCreativeOptimizationConfigurations,omitempty"`
    AdvertiserGroupID *string `json:"advertiserGroupId,omitempty"`
    AdvertiserID *string `json:"advertiserId,omitempty"`
    AdvertiserIDDimensionValue *DimensionValue `json:"advertiserIdDimensionValue,omitempty"`
    Archived *bool `json:"archived,omitempty"`
    AudienceSegmentGroups []AudienceSegmentGroup `json:"audienceSegmentGroups,omitempty"`
    BillingInvoiceCode *string `json:"billingInvoiceCode,omitempty"`
    ClickThroughURLSuffixProperties *ClickThroughURLSuffixProperties `json:"clickThroughUrlSuffixProperties,omitempty"`
    Comment *string `json:"comment,omitempty"`
    CreateInfo *LastModifiedInfo `json:"createInfo,omitempty"`
    CreativeGroupIds []string `json:"creativeGroupIds,omitempty"`
    CreativeOptimizationConfiguration *CreativeOptimizationConfiguration `json:"creativeOptimizationConfiguration,omitempty"`
    DefaultClickThroughEventTagProperties *DefaultClickThroughEventTagProperties `json:"defaultClickThroughEventTagProperties,omitempty"`
    DefaultLandingPageID *string `json:"defaultLandingPageId,omitempty"`
    EndDate *time.Time `json:"endDate,omitempty"`
    EventTagOverrides []EventTagOverride `json:"eventTagOverrides,omitempty"`
    ExternalID *string `json:"externalId,omitempty"`
    ID *string `json:"id,omitempty"`
    IDDimensionValue *DimensionValue `json:"idDimensionValue,omitempty"`
    Kind *string `json:"kind,omitempty"`
    LastModifiedInfo *LastModifiedInfo `json:"lastModifiedInfo,omitempty"`
    Name *string `json:"name,omitempty"`
    NielsenOcrEnabled *bool `json:"nielsenOcrEnabled,omitempty"`
    StartDate *time.Time `json:"startDate,omitempty"`
    SubaccountID *string `json:"subaccountId,omitempty"`
    TraffickerEmails []string `json:"traffickerEmails,omitempty"`
    
}

