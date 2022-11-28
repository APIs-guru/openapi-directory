package shared

type VersionKindEnum string

const (
	VersionKindEnumNormal  VersionKindEnum = "NORMAL"
	VersionKindEnumMinimum VersionKindEnum = "MINIMUM"
	VersionKindEnumMaximum VersionKindEnum = "MAXIMUM"
)

// Version
// Version contains structured information about the version of the package. For a discussion of this in Debian/Ubuntu: http://serverfault.com/questions/604541/debian-packages-version-convention For a discussion of this in Redhat/Fedora/Centos: http://blog.jasonantman.com/2014/07/how-yum-and-rpm-compare-versions/
type Version struct {
	Epoch     *int32           `json:"epoch,omitempty"`
	Inclusive *bool            `json:"inclusive,omitempty"`
	Kind      *VersionKindEnum `json:"kind,omitempty"`
	Name      *string          `json:"name,omitempty"`
	Revision  *string          `json:"revision,omitempty"`
}
