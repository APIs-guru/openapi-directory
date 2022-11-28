import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Package
/** 
 * The packages that must be installed in order for a worker to run the steps of the Cloud Dataflow job that will be assigned to its worker pool. This is the mechanism by which the Cloud Dataflow SDK causes code to be loaded onto the workers. For example, the Cloud Dataflow Java SDK might use this to install jars containing the user's code and all of the various dependencies (libraries, data files, etc.) required in order for that code to run.
**/
export class Package extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
