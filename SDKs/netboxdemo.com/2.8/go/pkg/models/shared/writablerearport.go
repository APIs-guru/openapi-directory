package shared

type WritableRearPortTypeTypeEnum string

const (
	WritableRearPortTypeTypeEnumEightp8c              WritableRearPortTypeTypeEnum = "8p8c"
	WritableRearPortTypeTypeEnumOneHundredAndTenPunch WritableRearPortTypeTypeEnum = "110-punch"
	WritableRearPortTypeTypeEnumBnc                   WritableRearPortTypeTypeEnum = "bnc"
	WritableRearPortTypeTypeEnumMrj21                 WritableRearPortTypeTypeEnum = "mrj21"
	WritableRearPortTypeTypeEnumFc                    WritableRearPortTypeTypeEnum = "fc"
	WritableRearPortTypeTypeEnumLc                    WritableRearPortTypeTypeEnum = "lc"
	WritableRearPortTypeTypeEnumLcApc                 WritableRearPortTypeTypeEnum = "lc-apc"
	WritableRearPortTypeTypeEnumLsh                   WritableRearPortTypeTypeEnum = "lsh"
	WritableRearPortTypeTypeEnumLshApc                WritableRearPortTypeTypeEnum = "lsh-apc"
	WritableRearPortTypeTypeEnumMpo                   WritableRearPortTypeTypeEnum = "mpo"
	WritableRearPortTypeTypeEnumMtrj                  WritableRearPortTypeTypeEnum = "mtrj"
	WritableRearPortTypeTypeEnumSc                    WritableRearPortTypeTypeEnum = "sc"
	WritableRearPortTypeTypeEnumScApc                 WritableRearPortTypeTypeEnum = "sc-apc"
	WritableRearPortTypeTypeEnumSt                    WritableRearPortTypeTypeEnum = "st"
)

type WritableRearPort struct {
	Cable       *NestedCable                 `json:"cable"`
	Description *string                      `json:"description"`
	Device      int64                        `json:"device"`
	ID          *int64                       `json:"id"`
	Name        string                       `json:"name"`
	Positions   *int64                       `json:"positions"`
	Tags        []string                     `json:"tags"`
	Type        WritableRearPortTypeTypeEnum `json:"type"`
}
