import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AssignmentMarkResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assessmentId" })
  assessmentId?: string;

  @SpeakeasyMetadata({ data: "json, name=assessmentItemDetails" })
  assessmentItemDetails?: string;

  @SpeakeasyMetadata({ data: "json, name=assessmentItemName" })
  assessmentItemName?: string;

  @SpeakeasyMetadata({ data: "json, name=courseName" })
  courseName?: string;

  @SpeakeasyMetadata({ data: "json, name=learnerEmail" })
  learnerEmail?: string;

  @SpeakeasyMetadata({ data: "json, name=learnerFirstName" })
  learnerFirstName?: string;

  @SpeakeasyMetadata({ data: "json, name=learnerLastName" })
  learnerLastName?: string;

  @SpeakeasyMetadata({ data: "json, name=learnerPersonId" })
  learnerPersonId?: string;

  @SpeakeasyMetadata({ data: "json, name=mark" })
  mark?: string;

  @SpeakeasyMetadata({ data: "json, name=markFeedback" })
  markFeedback?: string;

  @SpeakeasyMetadata({ data: "json, name=markedBy" })
  markedBy?: string;

  @SpeakeasyMetadata({ data: "json, name=markedByEvaluator" })
  markedByEvaluator?: boolean;

  @SpeakeasyMetadata({ data: "json, name=markedByFacilitator" })
  markedByFacilitator?: boolean;

  @SpeakeasyMetadata({ data: "json, name=markedByMarker" })
  markedByMarker?: boolean;

  @SpeakeasyMetadata({ data: "json, name=markedDateTime" })
  markedDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=submissionDateTime" })
  submissionDateTime?: Date;
}
