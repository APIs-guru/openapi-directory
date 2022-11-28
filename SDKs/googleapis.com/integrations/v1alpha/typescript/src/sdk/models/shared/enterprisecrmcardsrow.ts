import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EnterpriseCrmCardsCellValue } from "./enterprisecrmcardscellvalue";



export class EnterpriseCrmCardsRow extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cells", elemType: EnterpriseCrmCardsCellValue })
  cells?: EnterpriseCrmCardsCellValue[];
}
