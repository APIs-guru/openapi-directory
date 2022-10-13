package operations

type ProvisionNetworkClientsPathParams struct {
	NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
}

type ProvisionNetworkClientsRequestBodyClients struct {
	Mac  string  `json:"mac"`
	Name *string `json:"name"`
}

type ProvisionNetworkClientsRequestBodyDevicePolicyEnum string

const (
	ProvisionNetworkClientsRequestBodyDevicePolicyEnumGroupPolicy   ProvisionNetworkClientsRequestBodyDevicePolicyEnum = "Group policy"
	ProvisionNetworkClientsRequestBodyDevicePolicyEnumAllowed       ProvisionNetworkClientsRequestBodyDevicePolicyEnum = "Allowed"
	ProvisionNetworkClientsRequestBodyDevicePolicyEnumBlocked       ProvisionNetworkClientsRequestBodyDevicePolicyEnum = "Blocked"
	ProvisionNetworkClientsRequestBodyDevicePolicyEnumPerConnection ProvisionNetworkClientsRequestBodyDevicePolicyEnum = "Per connection"
	ProvisionNetworkClientsRequestBodyDevicePolicyEnumNormal        ProvisionNetworkClientsRequestBodyDevicePolicyEnum = "Normal"
)

type ProvisionNetworkClientsRequestBodyPoliciesBySecurityApplianceDevicePolicyEnum string

const (
	ProvisionNetworkClientsRequestBodyPoliciesBySecurityApplianceDevicePolicyEnumAllowed ProvisionNetworkClientsRequestBodyPoliciesBySecurityApplianceDevicePolicyEnum = "Allowed"
	ProvisionNetworkClientsRequestBodyPoliciesBySecurityApplianceDevicePolicyEnumBlocked ProvisionNetworkClientsRequestBodyPoliciesBySecurityApplianceDevicePolicyEnum = "Blocked"
	ProvisionNetworkClientsRequestBodyPoliciesBySecurityApplianceDevicePolicyEnumNormal  ProvisionNetworkClientsRequestBodyPoliciesBySecurityApplianceDevicePolicyEnum = "Normal"
)

type ProvisionNetworkClientsRequestBodyPoliciesBySecurityAppliance struct {
	DevicePolicy *ProvisionNetworkClientsRequestBodyPoliciesBySecurityApplianceDevicePolicyEnum `json:"devicePolicy"`
}

type ProvisionNetworkClientsRequestBodyPoliciesBySsid0DevicePolicyEnum string

const (
	ProvisionNetworkClientsRequestBodyPoliciesBySsid0DevicePolicyEnumAllowed     ProvisionNetworkClientsRequestBodyPoliciesBySsid0DevicePolicyEnum = "Allowed"
	ProvisionNetworkClientsRequestBodyPoliciesBySsid0DevicePolicyEnumBlocked     ProvisionNetworkClientsRequestBodyPoliciesBySsid0DevicePolicyEnum = "Blocked"
	ProvisionNetworkClientsRequestBodyPoliciesBySsid0DevicePolicyEnumNormal      ProvisionNetworkClientsRequestBodyPoliciesBySsid0DevicePolicyEnum = "Normal"
	ProvisionNetworkClientsRequestBodyPoliciesBySsid0DevicePolicyEnumGroupPolicy ProvisionNetworkClientsRequestBodyPoliciesBySsid0DevicePolicyEnum = "Group policy"
)

type ProvisionNetworkClientsRequestBodyPoliciesBySsid0 struct {
	DevicePolicy  ProvisionNetworkClientsRequestBodyPoliciesBySsid0DevicePolicyEnum `json:"devicePolicy"`
	GroupPolicyID *string                                                           `json:"groupPolicyId"`
}

type ProvisionNetworkClientsRequestBodyPoliciesBySsid1DevicePolicyEnum string

const (
	ProvisionNetworkClientsRequestBodyPoliciesBySsid1DevicePolicyEnumAllowed     ProvisionNetworkClientsRequestBodyPoliciesBySsid1DevicePolicyEnum = "Allowed"
	ProvisionNetworkClientsRequestBodyPoliciesBySsid1DevicePolicyEnumBlocked     ProvisionNetworkClientsRequestBodyPoliciesBySsid1DevicePolicyEnum = "Blocked"
	ProvisionNetworkClientsRequestBodyPoliciesBySsid1DevicePolicyEnumNormal      ProvisionNetworkClientsRequestBodyPoliciesBySsid1DevicePolicyEnum = "Normal"
	ProvisionNetworkClientsRequestBodyPoliciesBySsid1DevicePolicyEnumGroupPolicy ProvisionNetworkClientsRequestBodyPoliciesBySsid1DevicePolicyEnum = "Group policy"
)

type ProvisionNetworkClientsRequestBodyPoliciesBySsid1 struct {
	DevicePolicy  ProvisionNetworkClientsRequestBodyPoliciesBySsid1DevicePolicyEnum `json:"devicePolicy"`
	GroupPolicyID *string                                                           `json:"groupPolicyId"`
}

type ProvisionNetworkClientsRequestBodyPoliciesBySsid10DevicePolicyEnum string

const (
	ProvisionNetworkClientsRequestBodyPoliciesBySsid10DevicePolicyEnumAllowed     ProvisionNetworkClientsRequestBodyPoliciesBySsid10DevicePolicyEnum = "Allowed"
	ProvisionNetworkClientsRequestBodyPoliciesBySsid10DevicePolicyEnumBlocked     ProvisionNetworkClientsRequestBodyPoliciesBySsid10DevicePolicyEnum = "Blocked"
	ProvisionNetworkClientsRequestBodyPoliciesBySsid10DevicePolicyEnumNormal      ProvisionNetworkClientsRequestBodyPoliciesBySsid10DevicePolicyEnum = "Normal"
	ProvisionNetworkClientsRequestBodyPoliciesBySsid10DevicePolicyEnumGroupPolicy ProvisionNetworkClientsRequestBodyPoliciesBySsid10DevicePolicyEnum = "Group policy"
)

type ProvisionNetworkClientsRequestBodyPoliciesBySsid10 struct {
	DevicePolicy  ProvisionNetworkClientsRequestBodyPoliciesBySsid10DevicePolicyEnum `json:"devicePolicy"`
	GroupPolicyID *string                                                            `json:"groupPolicyId"`
}

type ProvisionNetworkClientsRequestBodyPoliciesBySsid11DevicePolicyEnum string

const (
	ProvisionNetworkClientsRequestBodyPoliciesBySsid11DevicePolicyEnumAllowed     ProvisionNetworkClientsRequestBodyPoliciesBySsid11DevicePolicyEnum = "Allowed"
	ProvisionNetworkClientsRequestBodyPoliciesBySsid11DevicePolicyEnumBlocked     ProvisionNetworkClientsRequestBodyPoliciesBySsid11DevicePolicyEnum = "Blocked"
	ProvisionNetworkClientsRequestBodyPoliciesBySsid11DevicePolicyEnumNormal      ProvisionNetworkClientsRequestBodyPoliciesBySsid11DevicePolicyEnum = "Normal"
	ProvisionNetworkClientsRequestBodyPoliciesBySsid11DevicePolicyEnumGroupPolicy ProvisionNetworkClientsRequestBodyPoliciesBySsid11DevicePolicyEnum = "Group policy"
)

type ProvisionNetworkClientsRequestBodyPoliciesBySsid11 struct {
	DevicePolicy  ProvisionNetworkClientsRequestBodyPoliciesBySsid11DevicePolicyEnum `json:"devicePolicy"`
	GroupPolicyID *string                                                            `json:"groupPolicyId"`
}

type ProvisionNetworkClientsRequestBodyPoliciesBySsid12DevicePolicyEnum string

const (
	ProvisionNetworkClientsRequestBodyPoliciesBySsid12DevicePolicyEnumAllowed     ProvisionNetworkClientsRequestBodyPoliciesBySsid12DevicePolicyEnum = "Allowed"
	ProvisionNetworkClientsRequestBodyPoliciesBySsid12DevicePolicyEnumBlocked     ProvisionNetworkClientsRequestBodyPoliciesBySsid12DevicePolicyEnum = "Blocked"
	ProvisionNetworkClientsRequestBodyPoliciesBySsid12DevicePolicyEnumNormal      ProvisionNetworkClientsRequestBodyPoliciesBySsid12DevicePolicyEnum = "Normal"
	ProvisionNetworkClientsRequestBodyPoliciesBySsid12DevicePolicyEnumGroupPolicy ProvisionNetworkClientsRequestBodyPoliciesBySsid12DevicePolicyEnum = "Group policy"
)

type ProvisionNetworkClientsRequestBodyPoliciesBySsid12 struct {
	DevicePolicy  ProvisionNetworkClientsRequestBodyPoliciesBySsid12DevicePolicyEnum `json:"devicePolicy"`
	GroupPolicyID *string                                                            `json:"groupPolicyId"`
}

type ProvisionNetworkClientsRequestBodyPoliciesBySsid13DevicePolicyEnum string

const (
	ProvisionNetworkClientsRequestBodyPoliciesBySsid13DevicePolicyEnumAllowed     ProvisionNetworkClientsRequestBodyPoliciesBySsid13DevicePolicyEnum = "Allowed"
	ProvisionNetworkClientsRequestBodyPoliciesBySsid13DevicePolicyEnumBlocked     ProvisionNetworkClientsRequestBodyPoliciesBySsid13DevicePolicyEnum = "Blocked"
	ProvisionNetworkClientsRequestBodyPoliciesBySsid13DevicePolicyEnumNormal      ProvisionNetworkClientsRequestBodyPoliciesBySsid13DevicePolicyEnum = "Normal"
	ProvisionNetworkClientsRequestBodyPoliciesBySsid13DevicePolicyEnumGroupPolicy ProvisionNetworkClientsRequestBodyPoliciesBySsid13DevicePolicyEnum = "Group policy"
)

type ProvisionNetworkClientsRequestBodyPoliciesBySsid13 struct {
	DevicePolicy  ProvisionNetworkClientsRequestBodyPoliciesBySsid13DevicePolicyEnum `json:"devicePolicy"`
	GroupPolicyID *string                                                            `json:"groupPolicyId"`
}

type ProvisionNetworkClientsRequestBodyPoliciesBySsid14DevicePolicyEnum string

const (
	ProvisionNetworkClientsRequestBodyPoliciesBySsid14DevicePolicyEnumAllowed     ProvisionNetworkClientsRequestBodyPoliciesBySsid14DevicePolicyEnum = "Allowed"
	ProvisionNetworkClientsRequestBodyPoliciesBySsid14DevicePolicyEnumBlocked     ProvisionNetworkClientsRequestBodyPoliciesBySsid14DevicePolicyEnum = "Blocked"
	ProvisionNetworkClientsRequestBodyPoliciesBySsid14DevicePolicyEnumNormal      ProvisionNetworkClientsRequestBodyPoliciesBySsid14DevicePolicyEnum = "Normal"
	ProvisionNetworkClientsRequestBodyPoliciesBySsid14DevicePolicyEnumGroupPolicy ProvisionNetworkClientsRequestBodyPoliciesBySsid14DevicePolicyEnum = "Group policy"
)

type ProvisionNetworkClientsRequestBodyPoliciesBySsid14 struct {
	DevicePolicy  ProvisionNetworkClientsRequestBodyPoliciesBySsid14DevicePolicyEnum `json:"devicePolicy"`
	GroupPolicyID *string                                                            `json:"groupPolicyId"`
}

type ProvisionNetworkClientsRequestBodyPoliciesBySsid2DevicePolicyEnum string

const (
	ProvisionNetworkClientsRequestBodyPoliciesBySsid2DevicePolicyEnumAllowed     ProvisionNetworkClientsRequestBodyPoliciesBySsid2DevicePolicyEnum = "Allowed"
	ProvisionNetworkClientsRequestBodyPoliciesBySsid2DevicePolicyEnumBlocked     ProvisionNetworkClientsRequestBodyPoliciesBySsid2DevicePolicyEnum = "Blocked"
	ProvisionNetworkClientsRequestBodyPoliciesBySsid2DevicePolicyEnumNormal      ProvisionNetworkClientsRequestBodyPoliciesBySsid2DevicePolicyEnum = "Normal"
	ProvisionNetworkClientsRequestBodyPoliciesBySsid2DevicePolicyEnumGroupPolicy ProvisionNetworkClientsRequestBodyPoliciesBySsid2DevicePolicyEnum = "Group policy"
)

type ProvisionNetworkClientsRequestBodyPoliciesBySsid2 struct {
	DevicePolicy  ProvisionNetworkClientsRequestBodyPoliciesBySsid2DevicePolicyEnum `json:"devicePolicy"`
	GroupPolicyID *string                                                           `json:"groupPolicyId"`
}

type ProvisionNetworkClientsRequestBodyPoliciesBySsid3DevicePolicyEnum string

const (
	ProvisionNetworkClientsRequestBodyPoliciesBySsid3DevicePolicyEnumAllowed     ProvisionNetworkClientsRequestBodyPoliciesBySsid3DevicePolicyEnum = "Allowed"
	ProvisionNetworkClientsRequestBodyPoliciesBySsid3DevicePolicyEnumBlocked     ProvisionNetworkClientsRequestBodyPoliciesBySsid3DevicePolicyEnum = "Blocked"
	ProvisionNetworkClientsRequestBodyPoliciesBySsid3DevicePolicyEnumNormal      ProvisionNetworkClientsRequestBodyPoliciesBySsid3DevicePolicyEnum = "Normal"
	ProvisionNetworkClientsRequestBodyPoliciesBySsid3DevicePolicyEnumGroupPolicy ProvisionNetworkClientsRequestBodyPoliciesBySsid3DevicePolicyEnum = "Group policy"
)

type ProvisionNetworkClientsRequestBodyPoliciesBySsid3 struct {
	DevicePolicy  ProvisionNetworkClientsRequestBodyPoliciesBySsid3DevicePolicyEnum `json:"devicePolicy"`
	GroupPolicyID *string                                                           `json:"groupPolicyId"`
}

type ProvisionNetworkClientsRequestBodyPoliciesBySsid4DevicePolicyEnum string

const (
	ProvisionNetworkClientsRequestBodyPoliciesBySsid4DevicePolicyEnumAllowed     ProvisionNetworkClientsRequestBodyPoliciesBySsid4DevicePolicyEnum = "Allowed"
	ProvisionNetworkClientsRequestBodyPoliciesBySsid4DevicePolicyEnumBlocked     ProvisionNetworkClientsRequestBodyPoliciesBySsid4DevicePolicyEnum = "Blocked"
	ProvisionNetworkClientsRequestBodyPoliciesBySsid4DevicePolicyEnumNormal      ProvisionNetworkClientsRequestBodyPoliciesBySsid4DevicePolicyEnum = "Normal"
	ProvisionNetworkClientsRequestBodyPoliciesBySsid4DevicePolicyEnumGroupPolicy ProvisionNetworkClientsRequestBodyPoliciesBySsid4DevicePolicyEnum = "Group policy"
)

type ProvisionNetworkClientsRequestBodyPoliciesBySsid4 struct {
	DevicePolicy  ProvisionNetworkClientsRequestBodyPoliciesBySsid4DevicePolicyEnum `json:"devicePolicy"`
	GroupPolicyID *string                                                           `json:"groupPolicyId"`
}

type ProvisionNetworkClientsRequestBodyPoliciesBySsid5DevicePolicyEnum string

const (
	ProvisionNetworkClientsRequestBodyPoliciesBySsid5DevicePolicyEnumAllowed     ProvisionNetworkClientsRequestBodyPoliciesBySsid5DevicePolicyEnum = "Allowed"
	ProvisionNetworkClientsRequestBodyPoliciesBySsid5DevicePolicyEnumBlocked     ProvisionNetworkClientsRequestBodyPoliciesBySsid5DevicePolicyEnum = "Blocked"
	ProvisionNetworkClientsRequestBodyPoliciesBySsid5DevicePolicyEnumNormal      ProvisionNetworkClientsRequestBodyPoliciesBySsid5DevicePolicyEnum = "Normal"
	ProvisionNetworkClientsRequestBodyPoliciesBySsid5DevicePolicyEnumGroupPolicy ProvisionNetworkClientsRequestBodyPoliciesBySsid5DevicePolicyEnum = "Group policy"
)

type ProvisionNetworkClientsRequestBodyPoliciesBySsid5 struct {
	DevicePolicy  ProvisionNetworkClientsRequestBodyPoliciesBySsid5DevicePolicyEnum `json:"devicePolicy"`
	GroupPolicyID *string                                                           `json:"groupPolicyId"`
}

type ProvisionNetworkClientsRequestBodyPoliciesBySsid6DevicePolicyEnum string

const (
	ProvisionNetworkClientsRequestBodyPoliciesBySsid6DevicePolicyEnumAllowed     ProvisionNetworkClientsRequestBodyPoliciesBySsid6DevicePolicyEnum = "Allowed"
	ProvisionNetworkClientsRequestBodyPoliciesBySsid6DevicePolicyEnumBlocked     ProvisionNetworkClientsRequestBodyPoliciesBySsid6DevicePolicyEnum = "Blocked"
	ProvisionNetworkClientsRequestBodyPoliciesBySsid6DevicePolicyEnumNormal      ProvisionNetworkClientsRequestBodyPoliciesBySsid6DevicePolicyEnum = "Normal"
	ProvisionNetworkClientsRequestBodyPoliciesBySsid6DevicePolicyEnumGroupPolicy ProvisionNetworkClientsRequestBodyPoliciesBySsid6DevicePolicyEnum = "Group policy"
)

type ProvisionNetworkClientsRequestBodyPoliciesBySsid6 struct {
	DevicePolicy  ProvisionNetworkClientsRequestBodyPoliciesBySsid6DevicePolicyEnum `json:"devicePolicy"`
	GroupPolicyID *string                                                           `json:"groupPolicyId"`
}

type ProvisionNetworkClientsRequestBodyPoliciesBySsid7DevicePolicyEnum string

const (
	ProvisionNetworkClientsRequestBodyPoliciesBySsid7DevicePolicyEnumAllowed     ProvisionNetworkClientsRequestBodyPoliciesBySsid7DevicePolicyEnum = "Allowed"
	ProvisionNetworkClientsRequestBodyPoliciesBySsid7DevicePolicyEnumBlocked     ProvisionNetworkClientsRequestBodyPoliciesBySsid7DevicePolicyEnum = "Blocked"
	ProvisionNetworkClientsRequestBodyPoliciesBySsid7DevicePolicyEnumNormal      ProvisionNetworkClientsRequestBodyPoliciesBySsid7DevicePolicyEnum = "Normal"
	ProvisionNetworkClientsRequestBodyPoliciesBySsid7DevicePolicyEnumGroupPolicy ProvisionNetworkClientsRequestBodyPoliciesBySsid7DevicePolicyEnum = "Group policy"
)

type ProvisionNetworkClientsRequestBodyPoliciesBySsid7 struct {
	DevicePolicy  ProvisionNetworkClientsRequestBodyPoliciesBySsid7DevicePolicyEnum `json:"devicePolicy"`
	GroupPolicyID *string                                                           `json:"groupPolicyId"`
}

type ProvisionNetworkClientsRequestBodyPoliciesBySsid8DevicePolicyEnum string

const (
	ProvisionNetworkClientsRequestBodyPoliciesBySsid8DevicePolicyEnumAllowed     ProvisionNetworkClientsRequestBodyPoliciesBySsid8DevicePolicyEnum = "Allowed"
	ProvisionNetworkClientsRequestBodyPoliciesBySsid8DevicePolicyEnumBlocked     ProvisionNetworkClientsRequestBodyPoliciesBySsid8DevicePolicyEnum = "Blocked"
	ProvisionNetworkClientsRequestBodyPoliciesBySsid8DevicePolicyEnumNormal      ProvisionNetworkClientsRequestBodyPoliciesBySsid8DevicePolicyEnum = "Normal"
	ProvisionNetworkClientsRequestBodyPoliciesBySsid8DevicePolicyEnumGroupPolicy ProvisionNetworkClientsRequestBodyPoliciesBySsid8DevicePolicyEnum = "Group policy"
)

type ProvisionNetworkClientsRequestBodyPoliciesBySsid8 struct {
	DevicePolicy  ProvisionNetworkClientsRequestBodyPoliciesBySsid8DevicePolicyEnum `json:"devicePolicy"`
	GroupPolicyID *string                                                           `json:"groupPolicyId"`
}

type ProvisionNetworkClientsRequestBodyPoliciesBySsid9DevicePolicyEnum string

const (
	ProvisionNetworkClientsRequestBodyPoliciesBySsid9DevicePolicyEnumAllowed     ProvisionNetworkClientsRequestBodyPoliciesBySsid9DevicePolicyEnum = "Allowed"
	ProvisionNetworkClientsRequestBodyPoliciesBySsid9DevicePolicyEnumBlocked     ProvisionNetworkClientsRequestBodyPoliciesBySsid9DevicePolicyEnum = "Blocked"
	ProvisionNetworkClientsRequestBodyPoliciesBySsid9DevicePolicyEnumNormal      ProvisionNetworkClientsRequestBodyPoliciesBySsid9DevicePolicyEnum = "Normal"
	ProvisionNetworkClientsRequestBodyPoliciesBySsid9DevicePolicyEnumGroupPolicy ProvisionNetworkClientsRequestBodyPoliciesBySsid9DevicePolicyEnum = "Group policy"
)

type ProvisionNetworkClientsRequestBodyPoliciesBySsid9 struct {
	DevicePolicy  ProvisionNetworkClientsRequestBodyPoliciesBySsid9DevicePolicyEnum `json:"devicePolicy"`
	GroupPolicyID *string                                                           `json:"groupPolicyId"`
}

type ProvisionNetworkClientsRequestBodyPoliciesBySsid struct {
	Zero     *ProvisionNetworkClientsRequestBodyPoliciesBySsid0  `json:"0"`
	One      *ProvisionNetworkClientsRequestBodyPoliciesBySsid1  `json:"1"`
	Ten      *ProvisionNetworkClientsRequestBodyPoliciesBySsid10 `json:"10"`
	Eleven   *ProvisionNetworkClientsRequestBodyPoliciesBySsid11 `json:"11"`
	Twelve   *ProvisionNetworkClientsRequestBodyPoliciesBySsid12 `json:"12"`
	Thirteen *ProvisionNetworkClientsRequestBodyPoliciesBySsid13 `json:"13"`
	Fourteen *ProvisionNetworkClientsRequestBodyPoliciesBySsid14 `json:"14"`
	Two      *ProvisionNetworkClientsRequestBodyPoliciesBySsid2  `json:"2"`
	Three    *ProvisionNetworkClientsRequestBodyPoliciesBySsid3  `json:"3"`
	Four     *ProvisionNetworkClientsRequestBodyPoliciesBySsid4  `json:"4"`
	Five     *ProvisionNetworkClientsRequestBodyPoliciesBySsid5  `json:"5"`
	Six      *ProvisionNetworkClientsRequestBodyPoliciesBySsid6  `json:"6"`
	Seven    *ProvisionNetworkClientsRequestBodyPoliciesBySsid7  `json:"7"`
	Eight    *ProvisionNetworkClientsRequestBodyPoliciesBySsid8  `json:"8"`
	Nine     *ProvisionNetworkClientsRequestBodyPoliciesBySsid9  `json:"9"`
}

type ProvisionNetworkClientsRequestBody struct {
	Clients                     []ProvisionNetworkClientsRequestBodyClients                    `json:"clients"`
	DevicePolicy                ProvisionNetworkClientsRequestBodyDevicePolicyEnum             `json:"devicePolicy"`
	GroupPolicyID               *string                                                        `json:"groupPolicyId"`
	PoliciesBySecurityAppliance *ProvisionNetworkClientsRequestBodyPoliciesBySecurityAppliance `json:"policiesBySecurityAppliance"`
	PoliciesBySsid              *ProvisionNetworkClientsRequestBodyPoliciesBySsid              `json:"policiesBySsid"`
}

type ProvisionNetworkClientsRequest struct {
	PathParams ProvisionNetworkClientsPathParams
	Request    ProvisionNetworkClientsRequestBody `request:"mediaType=application/json"`
}

type ProvisionNetworkClientsResponse struct {
	ContentType                                     string
	StatusCode                                      int64
	ProvisionNetworkClients201ApplicationJSONObject map[string]interface{}
}
