package shared

type DeviceFile struct {
	ObbFile     *ObbFile     `json:"obbFile"`
	RegularFile *RegularFile `json:"regularFile"`
}
