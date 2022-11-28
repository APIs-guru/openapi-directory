import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Version extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Build" })
  build?: number;

  @SpeakeasyMetadata({ data: "json, name=Major" })
  major?: number;

  @SpeakeasyMetadata({ data: "json, name=MajorRevision" })
  majorRevision?: number;

  @SpeakeasyMetadata({ data: "json, name=Minor" })
  minor?: number;

  @SpeakeasyMetadata({ data: "json, name=MinorRevision" })
  minorRevision?: number;

  @SpeakeasyMetadata({ data: "json, name=Revision" })
  revision?: number;
}
