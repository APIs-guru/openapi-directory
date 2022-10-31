package shared



type TaskLinks struct {
    Description *string `json:"description,omitempty"`
    Link *string `json:"link,omitempty"`
    Type *string `json:"type,omitempty"`
    
}

type Task struct {
    Completed *string `json:"completed,omitempty"`
    Deleted *bool `json:"deleted,omitempty"`
    Due *string `json:"due,omitempty"`
    Etag *string `json:"etag,omitempty"`
    Hidden *bool `json:"hidden,omitempty"`
    ID *string `json:"id,omitempty"`
    Kind *string `json:"kind,omitempty"`
    Links []TaskLinks `json:"links,omitempty"`
    Notes *string `json:"notes,omitempty"`
    Parent *string `json:"parent,omitempty"`
    Position *string `json:"position,omitempty"`
    SelfLink *string `json:"selfLink,omitempty"`
    Status *string `json:"status,omitempty"`
    Title *string `json:"title,omitempty"`
    Updated *string `json:"updated,omitempty"`
    
}

