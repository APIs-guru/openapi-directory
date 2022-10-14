package shared

type FieldValue struct {
	Date          *Date          `json:"date,omitempty"`
	Integer       *Integer       `json:"integer,omitempty"`
	Selection     *Selection     `json:"selection,omitempty"`
	SelectionList *SelectionList `json:"selectionList,omitempty"`
	Text          *Text          `json:"text,omitempty"`
	TextList      *TextList      `json:"textList,omitempty"`
	User          *SingleUser    `json:"user,omitempty"`
	UserList      *UserList      `json:"userList,omitempty"`
}
