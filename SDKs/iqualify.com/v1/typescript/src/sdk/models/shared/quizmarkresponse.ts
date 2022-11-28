import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class QuizMarkResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attempts" })
  attempts?: number;

  @SpeakeasyMetadata({ data: "json, name=lastAttemptAt" })
  lastAttemptAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=learnerEmail" })
  learnerEmail?: string;

  @SpeakeasyMetadata({ data: "json, name=learnerFullname" })
  learnerFullname?: string;

  @SpeakeasyMetadata({ data: "json, name=learnerPersonId" })
  learnerPersonId?: string;

  @SpeakeasyMetadata({ data: "json, name=mark" })
  mark?: string;

  @SpeakeasyMetadata({ data: "json, name=quizId" })
  quizId?: string;

  @SpeakeasyMetadata({ data: "json, name=quizTitle" })
  quizTitle?: string;
}
