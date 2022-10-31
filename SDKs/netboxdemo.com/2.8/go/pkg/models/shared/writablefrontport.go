package shared

type WritableFrontPortTypeEnum string

const (
	WritableFrontPortTypeEnumEightp8c              WritableFrontPortTypeEnum = "8p8c"
	WritableFrontPortTypeEnumOneHundredAndTenPunch WritableFrontPortTypeEnum = "110-punch"
	WritableFrontPortTypeEnumBnc                   WritableFrontPortTypeEnum = "bnc"
	WritableFrontPortTypeEnumMrj21                 WritableFrontPortTypeEnum = "mrj21"
	WritableFrontPortTypeEnumFc                    WritableFrontPortTypeEnum = "fc"
	WritableFrontPortTypeEnumLc                    WritableFrontPortTypeEnum = "lc"
	WritableFrontPortTypeEnumLcApc                 WritableFrontPortTypeEnum = "lc-apc"
	WritableFrontPortTypeEnumLsh                   WritableFrontPortTypeEnum = "lsh"
	WritableFrontPortTypeEnumLshApc                WritableFrontPortTypeEnum = "lsh-apc"
	WritableFrontPortTypeEnumMpo                   WritableFrontPortTypeEnum = "mpo"
	WritableFrontPortTypeEnumMtrj                  WritableFrontPortTypeEnum = "mtrj"
	WritableFrontPortTypeEnumSc                    WritableFrontPortTypeEnum = "sc"
	WritableFrontPortTypeEnumScApc                 WritableFrontPortTypeEnum = "sc-apc"
	WritableFrontPortTypeEnumSt                    WritableFrontPortTypeEnum = "st"
)

type WritableFrontPort struct {
	Cable            *NestedCable              `json:"cable,omitempty"`
	Description      *string                   `json:"description,omitempty"`
	Device           int64                     `json:"device"`
	ID               *int64                    `json:"id,omitempty"`
	Name             string                    `json:"name"`
	RearPort         int64                     `json:"rear_port"`
	RearPortPosition *int64                    `json:"rear_port_position,omitempty"`
	Tags             []string                  `json:"tags,omitempty"`
	Type             WritableFrontPortTypeEnum `json:"type"`
}
