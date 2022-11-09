import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Version extends SpeakeasyBase {
  @Metadata({ data: "json, name=Build, pathParam, name=Build" })
  build?: number;

  @Metadata({ data: "json, name=Major, pathParam, name=Major" })
  major?: number;

  @Metadata({ data: "json, name=MajorRevision, pathParam, name=MajorRevision" })
  majorRevision?: number;

  @Metadata({ data: "json, name=Minor, pathParam, name=Minor" })
  minor?: number;

  @Metadata({ data: "json, name=MinorRevision, pathParam, name=MinorRevision" })
  minorRevision?: number;

  @Metadata({ data: "json, name=Revision, pathParam, name=Revision" })
  revision?: number;
}
