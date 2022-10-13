package shared

import (
	"time"
)

type Campaign struct {
	AccountID                                    *string                                `json:"accountId"`
	AdBlockingConfiguration                      *AdBlockingConfiguration               `json:"adBlockingConfiguration"`
	AdditionalCreativeOptimizationConfigurations []CreativeOptimizationConfiguration    `json:"additionalCreativeOptimizationConfigurations"`
	AdvertiserGroupID                            *string                                `json:"advertiserGroupId"`
	AdvertiserID                                 *string                                `json:"advertiserId"`
	AdvertiserIDDimensionValue                   *DimensionValue                        `json:"advertiserIdDimensionValue"`
	Archived                                     *bool                                  `json:"archived"`
	AudienceSegmentGroups                        []AudienceSegmentGroup                 `json:"audienceSegmentGroups"`
	BillingInvoiceCode                           *string                                `json:"billingInvoiceCode"`
	ClickThroughURLSuffixProperties              *ClickThroughURLSuffixProperties       `json:"clickThroughUrlSuffixProperties"`
	Comment                                      *string                                `json:"comment"`
	CreateInfo                                   *LastModifiedInfo                      `json:"createInfo"`
	CreativeGroupIds                             []string                               `json:"creativeGroupIds"`
	CreativeOptimizationConfiguration            *CreativeOptimizationConfiguration     `json:"creativeOptimizationConfiguration"`
	DefaultClickThroughEventTagProperties        *DefaultClickThroughEventTagProperties `json:"defaultClickThroughEventTagProperties"`
	DefaultLandingPageID                         *string                                `json:"defaultLandingPageId"`
	EndDate                                      *time.Time                             `json:"endDate"`
	EventTagOverrides                            []EventTagOverride                     `json:"eventTagOverrides"`
	ExternalID                                   *string                                `json:"externalId"`
	ID                                           *string                                `json:"id"`
	IDDimensionValue                             *DimensionValue                        `json:"idDimensionValue"`
	Kind                                         *string                                `json:"kind"`
	LastModifiedInfo                             *LastModifiedInfo                      `json:"lastModifiedInfo"`
	MeasurementPartnerLink                       *MeasurementPartnerCampaignLink        `json:"measurementPartnerLink"`
	Name                                         *string                                `json:"name"`
	NielsenOcrEnabled                            *bool                                  `json:"nielsenOcrEnabled"`
	StartDate                                    *time.Time                             `json:"startDate"`
	SubaccountID                                 *string                                `json:"subaccountId"`
	TraffickerEmails                             []string                               `json:"traffickerEmails"`
}
