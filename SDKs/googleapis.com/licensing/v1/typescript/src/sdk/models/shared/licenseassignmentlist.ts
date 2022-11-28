import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LicenseAssignment } from "./licenseassignment";



export class LicenseAssignmentList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=items", elemType: LicenseAssignment })
  items?: LicenseAssignment[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
