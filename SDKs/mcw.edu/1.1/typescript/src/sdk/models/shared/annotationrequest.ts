import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AnnotationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=evidenceCodes" })
  evidenceCodes?: string[];

  @SpeakeasyMetadata({ data: "json, name=ids" })
  ids?: string[];

  @SpeakeasyMetadata({ data: "json, name=speciesTypeKeys" })
  speciesTypeKeys?: number[];

  @SpeakeasyMetadata({ data: "json, name=termAcc" })
  termAcc?: string;
}
