import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { EnterpriseCrmCardsCellValue } from "./enterprisecrmcardscellvalue";


export class EnterpriseCrmCardsRow extends SpeakeasyBase {
  @Metadata({ data: "json, name=cells", elemType: shared.EnterpriseCrmCardsCellValue })
  cells?: EnterpriseCrmCardsCellValue[];
}
