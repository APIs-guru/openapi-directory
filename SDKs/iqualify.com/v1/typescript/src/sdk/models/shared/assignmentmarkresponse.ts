import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AssignmentMarkResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=assessmentId" })
  assessmentId?: string;

  @Metadata({ data: "json, name=assessmentItemDetails" })
  assessmentItemDetails?: string;

  @Metadata({ data: "json, name=assessmentItemName" })
  assessmentItemName?: string;

  @Metadata({ data: "json, name=courseName" })
  courseName?: string;

  @Metadata({ data: "json, name=learnerEmail" })
  learnerEmail?: string;

  @Metadata({ data: "json, name=learnerFirstName" })
  learnerFirstName?: string;

  @Metadata({ data: "json, name=learnerLastName" })
  learnerLastName?: string;

  @Metadata({ data: "json, name=learnerPersonId" })
  learnerPersonId?: string;

  @Metadata({ data: "json, name=mark" })
  mark?: string;

  @Metadata({ data: "json, name=markFeedback" })
  markFeedback?: string;

  @Metadata({ data: "json, name=markedBy" })
  markedBy?: string;

  @Metadata({ data: "json, name=markedByEvaluator" })
  markedByEvaluator?: boolean;

  @Metadata({ data: "json, name=markedByFacilitator" })
  markedByFacilitator?: boolean;

  @Metadata({ data: "json, name=markedByMarker" })
  markedByMarker?: boolean;

  @Metadata({ data: "json, name=markedDateTime" })
  markedDateTime?: Date;

  @Metadata({ data: "json, name=submissionDateTime" })
  submissionDateTime?: Date;
}
