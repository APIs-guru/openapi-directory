import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { FigiResult } from "./figiresult";


export class MappingJobResultFigiList extends SpeakeasyBase {
  @Metadata({ data: "json, name=data", elemType: shared.FigiResult })
  data?: FigiResult[];
}
