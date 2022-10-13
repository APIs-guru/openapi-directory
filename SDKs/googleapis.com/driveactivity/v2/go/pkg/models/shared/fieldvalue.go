package shared

type FieldValue struct {
	Date          *Date          `json:"date"`
	Integer       *Integer       `json:"integer"`
	Selection     *Selection     `json:"selection"`
	SelectionList *SelectionList `json:"selectionList"`
	Text          *Text          `json:"text"`
	TextList      *TextList      `json:"textList"`
	User          *SingleUser    `json:"user"`
	UserList      *UserList      `json:"userList"`
}
