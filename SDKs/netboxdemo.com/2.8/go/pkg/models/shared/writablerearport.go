package shared

type WritableRearPortTypeEnum string

const (
	WritableRearPortTypeEnumEightp8c              WritableRearPortTypeEnum = "8p8c"
	WritableRearPortTypeEnumOneHundredAndTenPunch WritableRearPortTypeEnum = "110-punch"
	WritableRearPortTypeEnumBnc                   WritableRearPortTypeEnum = "bnc"
	WritableRearPortTypeEnumMrj21                 WritableRearPortTypeEnum = "mrj21"
	WritableRearPortTypeEnumFc                    WritableRearPortTypeEnum = "fc"
	WritableRearPortTypeEnumLc                    WritableRearPortTypeEnum = "lc"
	WritableRearPortTypeEnumLcApc                 WritableRearPortTypeEnum = "lc-apc"
	WritableRearPortTypeEnumLsh                   WritableRearPortTypeEnum = "lsh"
	WritableRearPortTypeEnumLshApc                WritableRearPortTypeEnum = "lsh-apc"
	WritableRearPortTypeEnumMpo                   WritableRearPortTypeEnum = "mpo"
	WritableRearPortTypeEnumMtrj                  WritableRearPortTypeEnum = "mtrj"
	WritableRearPortTypeEnumSc                    WritableRearPortTypeEnum = "sc"
	WritableRearPortTypeEnumScApc                 WritableRearPortTypeEnum = "sc-apc"
	WritableRearPortTypeEnumSt                    WritableRearPortTypeEnum = "st"
)

type WritableRearPort struct {
	Cable       *NestedCable             `json:"cable,omitempty"`
	Description *string                  `json:"description,omitempty"`
	Device      int64                    `json:"device"`
	ID          *int64                   `json:"id,omitempty"`
	Name        string                   `json:"name"`
	Positions   *int64                   `json:"positions,omitempty"`
	Tags        []string                 `json:"tags,omitempty"`
	Type        WritableRearPortTypeEnum `json:"type"`
}
