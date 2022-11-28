from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2AnswerRecord:
    r"""GoogleCloudDialogflowV2AnswerRecord
    Answer records are records to manage answer history and feedbacks for Dialogflow. Currently, answer record includes: - human agent assistant article suggestion - human agent assistant faq article It doesn't include: - `DetectIntent` intent matching - `DetectIntent` knowledge Answer records are not related to the conversation history in the Dialogflow Console. A Record is generated even when the end-user disables conversation history in the console. Records are created when there's a human agent assistant suggestion generated. A typical workflow for customers provide feedback to an answer is: 1. For human agent assistant, customers get suggestion via ListSuggestions API. Together with the answers, AnswerRecord.name are returned to the customers. 2. The customer uses the AnswerRecord.name to call the UpdateAnswerRecord method to send feedback about a specific answer that they believe is wrong.
    """
    
    agent_assistant_record: Optional[GoogleCloudDialogflowV2AgentAssistantRecord] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('agentAssistantRecord') }})
    answer_feedback: Optional[GoogleCloudDialogflowV2AnswerFeedback] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('answerFeedback') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
