import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Precinct extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=administrationRegionId" })
  administrationRegionId?: string;

  @SpeakeasyMetadata({ data: "json, name=contestId" })
  contestId?: string[];

  @SpeakeasyMetadata({ data: "json, name=datasetId" })
  datasetId?: string;

  @SpeakeasyMetadata({ data: "json, name=earlyVoteSiteId" })
  earlyVoteSiteId?: string[];

  @SpeakeasyMetadata({ data: "json, name=electoralDistrictId" })
  electoralDistrictId?: string[];

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=mailOnly" })
  mailOnly?: boolean;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=number" })
  number?: string;

  @SpeakeasyMetadata({ data: "json, name=ocdId" })
  ocdId?: string[];

  @SpeakeasyMetadata({ data: "json, name=pollingLocationId" })
  pollingLocationId?: string[];

  @SpeakeasyMetadata({ data: "json, name=spatialBoundaryId" })
  spatialBoundaryId?: string[];

  @SpeakeasyMetadata({ data: "json, name=splitName" })
  splitName?: string;

  @SpeakeasyMetadata({ data: "json, name=ward" })
  ward?: string;
}
