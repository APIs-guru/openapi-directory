import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FigiResult } from "./figiresult";



export class MappingJobResultFigiList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: FigiResult })
  data?: FigiResult[];
}
