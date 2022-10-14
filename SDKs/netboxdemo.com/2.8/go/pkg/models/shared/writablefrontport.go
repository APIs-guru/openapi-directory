package shared

type WritableFrontPortTypeTypeEnum string

const (
	WritableFrontPortTypeTypeEnumEightp8c              WritableFrontPortTypeTypeEnum = "8p8c"
	WritableFrontPortTypeTypeEnumOneHundredAndTenPunch WritableFrontPortTypeTypeEnum = "110-punch"
	WritableFrontPortTypeTypeEnumBnc                   WritableFrontPortTypeTypeEnum = "bnc"
	WritableFrontPortTypeTypeEnumMrj21                 WritableFrontPortTypeTypeEnum = "mrj21"
	WritableFrontPortTypeTypeEnumFc                    WritableFrontPortTypeTypeEnum = "fc"
	WritableFrontPortTypeTypeEnumLc                    WritableFrontPortTypeTypeEnum = "lc"
	WritableFrontPortTypeTypeEnumLcApc                 WritableFrontPortTypeTypeEnum = "lc-apc"
	WritableFrontPortTypeTypeEnumLsh                   WritableFrontPortTypeTypeEnum = "lsh"
	WritableFrontPortTypeTypeEnumLshApc                WritableFrontPortTypeTypeEnum = "lsh-apc"
	WritableFrontPortTypeTypeEnumMpo                   WritableFrontPortTypeTypeEnum = "mpo"
	WritableFrontPortTypeTypeEnumMtrj                  WritableFrontPortTypeTypeEnum = "mtrj"
	WritableFrontPortTypeTypeEnumSc                    WritableFrontPortTypeTypeEnum = "sc"
	WritableFrontPortTypeTypeEnumScApc                 WritableFrontPortTypeTypeEnum = "sc-apc"
	WritableFrontPortTypeTypeEnumSt                    WritableFrontPortTypeTypeEnum = "st"
)

type WritableFrontPort struct {
	Cable            *NestedCable                  `json:"cable,omitempty"`
	Description      *string                       `json:"description,omitempty"`
	Device           int64                         `json:"device"`
	ID               *int64                        `json:"id,omitempty"`
	Name             string                        `json:"name"`
	RearPort         int64                         `json:"rear_port"`
	RearPortPosition *int64                        `json:"rear_port_position,omitempty"`
	Tags             []string                      `json:"tags,omitempty"`
	Type             WritableFrontPortTypeTypeEnum `json:"type"`
}
