package shared

// ReverseSSHConnectivity
// The details needed to configure a reverse SSH tunnel between the source and destination databases. These details will be used when calling the generateSshScript method (see https://cloud.google.com/database-migration/docs/reference/rest/v1beta1/projects.locations.migrationJobs/generateSshScript) to produce the script that will help set up the reverse SSH tunnel, and to set up the VPC peering between the Cloud SQL private network and the VPC.
type ReverseSSHConnectivity struct {
	VM     *string `json:"vm,omitempty"`
	VMIP   *string `json:"vmIp,omitempty"`
	VMPort *int32  `json:"vmPort,omitempty"`
	Vpc    *string `json:"vpc,omitempty"`
}
