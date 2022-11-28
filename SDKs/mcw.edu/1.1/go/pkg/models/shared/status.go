package shared

import (
	"time"
)

type Status struct {
	CryopreservedEmbryo *bool
	CryopreservedSperm  *bool
	Cryorecovery        *bool
	Key                 *int32
	LiveAnimals         *bool
	StatusDate          *time.Time
	StrainRgdID         *int32
}
