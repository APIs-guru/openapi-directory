import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AmendmentTypeEnum } from "./amendmenttypeenum";
import { AmendmentDecisionEnum } from "./amendmentdecisionenum";
import { AmendmentMember } from "./amendmentmember";



export class AmendmentSearchItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amendmentId" })
  amendmentId?: number;

  @SpeakeasyMetadata({ data: "json, name=amendmentPosition" })
  amendmentPosition?: string;

  @SpeakeasyMetadata({ data: "json, name=amendmentType" })
  amendmentType?: AmendmentTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=billId" })
  billId?: number;

  @SpeakeasyMetadata({ data: "json, name=billStageId" })
  billStageId?: number;

  @SpeakeasyMetadata({ data: "json, name=clause" })
  clause?: number;

  @SpeakeasyMetadata({ data: "json, name=decision" })
  decision?: AmendmentDecisionEnum;

  @SpeakeasyMetadata({ data: "json, name=lineNumber" })
  lineNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=marshalledListText" })
  marshalledListText?: string;

  @SpeakeasyMetadata({ data: "json, name=pageNumber" })
  pageNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=schedule" })
  schedule?: number;

  @SpeakeasyMetadata({ data: "json, name=sponsors", elemType: AmendmentMember })
  sponsors?: AmendmentMember[];

  @SpeakeasyMetadata({ data: "json, name=summaryText" })
  summaryText?: string[];
}
