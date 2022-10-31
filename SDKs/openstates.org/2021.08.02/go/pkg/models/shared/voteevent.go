package shared



type VoteEvent struct {
    Counts []VoteCount `json:"counts"`
    ID string `json:"id"`
    Identifier string `json:"identifier"`
    MotionClassification []string `json:"motion_classification,omitempty"`
    MotionText string `json:"motion_text"`
    Organization Organization `json:"organization"`
    Result string `json:"result"`
    Sources []Link `json:"sources"`
    StartDate string `json:"start_date"`
    Votes []PersonVote `json:"votes"`
    
}

