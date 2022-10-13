package shared

import (
	"time"
)

type LandlordMaintenanceCertificateModel struct {
	Due    *time.Time                 `json:"Due"`
	Files  []LettingsLandlordDocument `json:"Files"`
	Status *string                    `json:"Status"`
	Type   *string                    `json:"Type"`
}
