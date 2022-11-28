package shared

// Devices
// A dictionary of device disks to use as a device map in a Linode's configuration profile.
// * An empty device disk dictionary or a dictionary with empty values for device slots is allowed.
// * If no devices are specified, booting from this configuration will hold waiting for a device to exist before being able to boot.
type Devices struct {
	Sda *Device `json:"sda,omitempty"`
	Sdb *Device `json:"sdb,omitempty"`
	Sdc *Device `json:"sdc,omitempty"`
	Sdd *Device `json:"sdd,omitempty"`
	Sde *Device `json:"sde,omitempty"`
	Sdf *Device `json:"sdf,omitempty"`
	Sdg *Device `json:"sdg,omitempty"`
	Sdh *Device `json:"sdh,omitempty"`
}
