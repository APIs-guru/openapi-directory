import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Precinct extends SpeakeasyBase {
  @Metadata({ data: "json, name=administrationRegionId" })
  administrationRegionId?: string;

  @Metadata({ data: "json, name=contestId" })
  contestId?: string[];

  @Metadata({ data: "json, name=datasetId" })
  datasetId?: string;

  @Metadata({ data: "json, name=earlyVoteSiteId" })
  earlyVoteSiteId?: string[];

  @Metadata({ data: "json, name=electoralDistrictId" })
  electoralDistrictId?: string[];

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=mailOnly" })
  mailOnly?: boolean;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=number" })
  number?: string;

  @Metadata({ data: "json, name=ocdId" })
  ocdId?: string[];

  @Metadata({ data: "json, name=pollingLocationId" })
  pollingLocationId?: string[];

  @Metadata({ data: "json, name=spatialBoundaryId" })
  spatialBoundaryId?: string[];

  @Metadata({ data: "json, name=splitName" })
  splitName?: string;

  @Metadata({ data: "json, name=ward" })
  ward?: string;
}
