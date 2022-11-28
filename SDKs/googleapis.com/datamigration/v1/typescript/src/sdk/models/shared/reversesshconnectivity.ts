import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ReverseSshConnectivity
/** 
 * The details needed to configure a reverse SSH tunnel between the source and destination databases. These details will be used when calling the generateSshScript method (see https://cloud.google.com/database-migration/docs/reference/rest/v1/projects.locations.migrationJobs/generateSshScript) to produce the script that will help set up the reverse SSH tunnel, and to set up the VPC peering between the Cloud SQL private network and the VPC.
**/
export class ReverseSshConnectivity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=vm" })
  vm?: string;

  @SpeakeasyMetadata({ data: "json, name=vmIp" })
  vmIp?: string;

  @SpeakeasyMetadata({ data: "json, name=vmPort" })
  vmPort?: number;

  @SpeakeasyMetadata({ data: "json, name=vpc" })
  vpc?: string;
}
