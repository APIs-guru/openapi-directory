import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AmendmentTypeEnum } from "./amendmenttypeenum";
import { AmendmentDecisionEnum } from "./amendmentdecisionenum";
import { AmendmentMember } from "./amendmentmember";


export class AmendmentSearchItem extends SpeakeasyBase {
  @Metadata({ data: "json, name=amendmentId" })
  amendmentId?: number;

  @Metadata({ data: "json, name=amendmentPosition" })
  amendmentPosition?: string;

  @Metadata({ data: "json, name=amendmentType" })
  amendmentType?: AmendmentTypeEnum;

  @Metadata({ data: "json, name=billId" })
  billId?: number;

  @Metadata({ data: "json, name=billStageId" })
  billStageId?: number;

  @Metadata({ data: "json, name=clause" })
  clause?: number;

  @Metadata({ data: "json, name=decision" })
  decision?: AmendmentDecisionEnum;

  @Metadata({ data: "json, name=lineNumber" })
  lineNumber?: number;

  @Metadata({ data: "json, name=marshalledListText" })
  marshalledListText?: string;

  @Metadata({ data: "json, name=pageNumber" })
  pageNumber?: number;

  @Metadata({ data: "json, name=schedule" })
  schedule?: number;

  @Metadata({ data: "json, name=sponsors", elemType: shared.AmendmentMember })
  sponsors?: AmendmentMember[];

  @Metadata({ data: "json, name=summaryText" })
  summaryText?: string[];
}
