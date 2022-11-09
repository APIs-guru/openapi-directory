import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class QuizMarkResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=attempts" })
  attempts?: number;

  @Metadata({ data: "json, name=lastAttemptAt" })
  lastAttemptAt?: Date;

  @Metadata({ data: "json, name=learnerEmail" })
  learnerEmail?: string;

  @Metadata({ data: "json, name=learnerFullname" })
  learnerFullname?: string;

  @Metadata({ data: "json, name=learnerPersonId" })
  learnerPersonId?: string;

  @Metadata({ data: "json, name=mark" })
  mark?: string;

  @Metadata({ data: "json, name=quizId" })
  quizId?: string;

  @Metadata({ data: "json, name=quizTitle" })
  quizTitle?: string;
}
