package shared

type StatesListStates struct {
	Categories [][]interface{}
	Content    *string
	Date       *string
	Excerpt    *string
	ID         *string
	Lang       *string
	Path       *string
	Sort       *float64
	Stateurl   *string
	Tags       [][]string
	Title      *string
	URL        *string
}

type StatesList struct {
	States [][]StatesListStates
}
